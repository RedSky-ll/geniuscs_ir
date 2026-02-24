import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-ExtraBlack.ttf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
});

import { MobileCallButton } from "@/components/mobile-call-button";



export const metadata: Metadata = {

  title: "جنیوس سی اس | راهکارهای مدرن وب و موبایل",

  description: "آژانس طراحی و توسعه حرفه‌ای برای تجربه‌های دیجیتال برتر.",

};



export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="fa" dir="rtl">

      <body

        className={`${yekanBakh.className} ${geistSans.variable} ${geistMono.variable} ${yekanBakh.variable} antialiased bg-background text-foreground transition-colors duration-500`}

      >

        {children}

        <MobileCallButton />

      </body>

    </html>

  );

}
