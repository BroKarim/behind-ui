import { Ubuntu, Roboto, Inter, Anonymous_Pro, Ubuntu_Mono, Roboto_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import localFont from "next/font/local";

export const geist = GeistSans;

export const fontClash = localFont({ src: "../assets/fonts/ClashDisplay-Bold.otf" });

export const geistMono = GeistMono;

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // tambahkan sesuai kebutuhanmu
  variable: "--font-ubuntu",
});
export const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
});
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});
export const anonymous_pro = Anonymous_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-anonymous-pro",
});
