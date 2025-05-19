"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.h1 variants={wrapperFramerProps} initial="hidden" animate="show" className={cn("font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm", className)}>
      {words.split(" ").map((word, i) => (
        <motion.span key={i} variants={framerProps} style={{ display: "inline-block", paddingRight: "8px" }}>
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className={cn("flex justify-center space-x-1", className)}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1 key={i} initial="hidden" animate="visible" exit="hidden" variants={framerProps} transition={{ duration, delay: i * delayMultiple }} className={cn("drop-shadow-sm ", className)}>
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
