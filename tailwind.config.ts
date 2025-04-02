import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "sm": "0.75rem",
      },
      colors: {
        background: "rgba(247, 247, 247, 1)",
        foreground: "var(--foreground)",
        primary:"rgba(9, 18, 48, 1)",
        grey: "#9F9F9F",
        secondary:"rgba(159, 159, 159, 1)",
      },
      minWidth:{
        "166":"41.5rem"
      },
      height:{
        "142":"35.5rem"
      },
      fontFamily:{
        nauryzRedKeds:["NauryzRedKeds","sans-serif"],
        gilroy:["Gilroy","sans-serif"]
      },
      screens:{
        'xll': '1440px',
        
      }
  
    },
  },
  plugins: [],
} satisfies Config;
