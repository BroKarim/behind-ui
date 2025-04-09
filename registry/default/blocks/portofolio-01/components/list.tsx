"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import AnimatedBackground from "./animated-background";

export const List = ({ items }: { items: { title: string; description?: string; hint?: string; href: string }[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="text-sm">
      {items.map((item, index) => (
        <AnimatedBackground
         key={index} 
          className="rounded-lg bg-zinc-100/50 hover:text-primary dark:bg-zinc-800/50 "
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          <div>
            <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} className="w-full">
              <div className={cn("flex items-center justify-between border-b py-3 duration-200", hoveredIndex !== null && hoveredIndex !== index ? "!opacity-50" : "")}>
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  {item.description && <span>{item.description}</span>}
                </div>
                {item.hint && <span className=" text-right">{item.hint}</span>}
              </div>
            </Link>
          </div>
        </AnimatedBackground>
      ))}
    </div>
  );
};
