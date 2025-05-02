"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Badge {
  children: React.ReactNode;
  company: string;
  role: string;
}

type BadgeItem = Badge;

interface ExpandableTabProps {
  badges: BadgeItem[];
  bgColor?: string;
  className?: string;
  activeColor?: string;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
  hover: {
    gap: ".5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};

const transition = { type: "spring", bounce: 0, duration: 0.5 };

export function ExpandableTab({
  badges,
  className,
  activeColor = "text-primary",
  bgColor,
}: ExpandableTabProps) {
  const outsideClickRef = React.useRef(null);
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm",
        className,
      )}
    >
      {badges.map((badge, index) => {
        return (
          <motion.button
            key={index}
            variants={buttonVariants}
            initial="initial"
            animate={hovered === index ? "hover" : "initial"}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            transition={transition}
            className={cn(
              "group relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
              bgColor,
              hovered === index
                ? cn("bg-background", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {badge.children}
            <p className="ml-2">{badge.company}</p>

            <AnimatePresence initial={false}>
              {hovered === index && (
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={
                    hovered === index
                      ? { opacity: 1, scaleX: 1 }
                      : { opacity: 0, scaleX: 0 }
                  }
                  transition={transition}
                  className="  whitespace-nowrap   "
                >
                  {badge.role}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
