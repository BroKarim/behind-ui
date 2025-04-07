"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import AnimatedBackground from "./animated-background";

export const List = ({
  items,
}: {
  items: { title: string; description?: string; hint?: string; href: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="text-sm">
      {/* <AnimatedBackground
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        
      </AnimatedBackground> */}
      {items.map((item, index) => (
        <AnimatedBackground
          className="rounded-lg hover:text-primary bg-zinc-100/50 dark:bg-zinc-800/50 "
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          <div key={index}>
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="w-full"
            >
              <div
                className={cn(
                  "flex items-center justify-between border-b py-3 duration-200",
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "!opacity-50"
                    : "",
                )}
              >
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
