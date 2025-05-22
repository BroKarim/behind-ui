"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

//see postpark
export function SiteFooter() {
  const emojis = ["🤩", "😭", "🤢", "🤮", "🤒"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="relative border py-6 md:py-0">
      <div
        className="absolute top-0 h-px w-full"
        style={{
          background: "radial-gradient(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div className="container flex  items-center justify-center gap-4 md:h-12 ">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with <span className="transition-all duration-300">{emojis[currentEmojiIndex]}</span> by {""}
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="font-medium  text-red-500 underline-offset-4">
            @BroKariim
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
