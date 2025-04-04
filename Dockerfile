# Stage for installing dependencies
FROM node:18-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Create public directory if it doesn't exist
RUN mkdir -p public

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create public directory
RUN mkdir -p public

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Set permissions
RUN chown -R nextjs:nodejs .

USER nextjs

EXPOSE 8080

ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]

# Development stage
FROM node:18-alpine AS dev
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Use npm ci instead of npm install for exact versions from package-lock.json
RUN npm ci

# Create public directory if it doesn't exist
RUN mkdir -p public

# Copy source code
COPY . .

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 8080

CMD ["npm", "run", "dev"]
