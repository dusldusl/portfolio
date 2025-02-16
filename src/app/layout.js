import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "연희 포트폴리오 만들기",
  description: "배움엔 끝이 없다",
  keywords:["포트폴리오","채연희","프로젝트1","프로젝트2"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
       <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body> 
        {children}
      </body>
    </html>
  );
}
