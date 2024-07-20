import React from "react";
import type { Metadata } from "next";
import { Roboto, Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import { AuthProvider, MSWProvider } from "@/app/provider/index";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notoSansKr",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${notoSansKr.variable}`}>
        <MSWProvider>
          <AuthProvider>{children}</AuthProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
