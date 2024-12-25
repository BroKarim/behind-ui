import { JetBrains_Mono as FontMono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

export const fontSans = GeistSans;

export const fontClash = localFont({ src: "../assets/fonts/ClashDisplay-Bold.otf" });

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
