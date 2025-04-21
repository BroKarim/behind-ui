import { JetBrains_Mono as FontMono, Roboto, Lora } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

export const fontSans = GeistSans;

export const fontClash = localFont({ src: "../assets/fonts/ClashDisplay-Bold.otf" });

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const fontRoboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});