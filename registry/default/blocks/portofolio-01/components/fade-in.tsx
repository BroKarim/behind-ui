"use client";

import React, { ForwardedRef, forwardRef } from "react";
import { motion, HTMLMotionProps, type Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = (y: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: y ? 16 : 0,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
});

// Use forwardRef to properly handle the ref
const Container = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>((props, ref) => {
  return <motion.div ref={ref} variants={container} initial="hidden" animate="show" {...props} />;
});

// Also use forwardRef for the Item component
type ItemProps = {
  translateAnimation?: boolean;
} & Omit<HTMLMotionProps<"div">, "translateAnimation">;

const Item = React.forwardRef<HTMLDivElement, ItemProps>(({ translateAnimation = true, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
  return <motion.div ref={ref} variants={item(translateAnimation)} {...props} />;
});
// Make sure to add display names for better debugging
Container.displayName = "FadeInContainer";
Item.displayName = "FadeInItem";

// Export the components
export { Container, Item };
