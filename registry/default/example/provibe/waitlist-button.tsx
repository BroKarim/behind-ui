"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { AnimatedGroup } from "../components/animated-group";

// Animated avatar component
const AnimatedAvatar = ({ src, index }: { src: string; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      }}
      transition={{ duration: 0.2 }}
      className="relative -mr-4"
    >
      <img
        src={src}
        alt="Member avatar"
        className={cn(
          "relative !m-0 h-8 w-10 rounded-full object-cover object-top !p-0 transition  duration-500 group-hover:z-30 group-hover:scale-105",
        )}
      />
    </motion.div>
  );
};

export default function WaitlistButton() {
  const avatars = [
    "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672863601285-253fc82db868?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="relative flex items-center">
      <Button
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        size="lg"
        className="rounded-full bg-black text-lg hover:bg-[#2563EB]/90"
      >
        Join waitlist
      </Button>

      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            className="absolute -top-28 z-50 flex w-full translate-x-1/2 flex-col items-center justify-center space-y-2 rounded-md  border-zinc-800 bg-zinc-900  px-6 py-2 text-xs shadow-xl"
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
          >
            <p className="text-sm text-zinc-400">15k+ already joined</p>
            <AnimatedGroup className="flex w-full justify-center gap-2 ">
              {avatars.map((avatar, index) => (
                <AnimatedAvatar key={index} src={avatar} index={index} />
              ))}
            </AnimatedGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
