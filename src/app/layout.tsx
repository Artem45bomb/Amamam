import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {GlobalProvider} from "@/providers/GlobalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmAmAm - лучшее место чтобы быть сытым",
  description: "Авторские блюда от шеф-повара Сергея Ворошилова у вас дома",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <GlobalProvider>
          {children}
      </GlobalProvider>
      </body>
    </html>
  );
}
