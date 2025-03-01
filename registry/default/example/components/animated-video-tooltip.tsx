"use client";

import { useState, useCallback, useMemo } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipItem {
  id: number;
  name: string;
  image: string;
  video: string;
  text: string;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
  className?: string;
}

export const AnimatedTooltip = ({
  items,
  className = "",
}: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showText, setShowText] = useState(false);
  const springConfig = useMemo(
    () => ({
      stiffness: 100,
      damping: 5,
    }),
    [],
  );

  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    },
    [x],
  );

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    stiffness: 260,
                    damping: 10,
                    duration: 0.3,
                  },
                  width: showText ? "300px" : "96px",
                  height: showText ? "auto" : "96px",
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  // rotate: rotate,
                  // whiteSpace: "nowrap",
                }}
                className="group absolute -left-1/2 -top-20  z-50 flex h-24 w-24 translate-x-1/2 flex-col items-center justify-center rounded-md border-2 border-white bg-white  px-4 py-2 text-xs shadow-xl"
              >
                <motion.div
                  animate={{ opacity: showText ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10"
                >
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-md object-cover ring-black"
                  />
                </motion.div>
                <motion.div
                  className="flex max-h-32 w-full flex-col overflow-y-auto bg-white  p-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showText ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-foreground-foreground text-sm text-black">
                    {item.text}
                  </p>
                </motion.div>
                <div className=" relative h-full w-full ">
                  <div
                    className={`absolute ${showText ? "left-0" : "-left-[16%]"} bottom-2 z-30 flex items-center justify-center space-x-2 rounded-full border border-white p-1 text-black`}
                  >
                    <button
                      className={`h-auto rounded-full px-1 text-[8px] ${!showText ? "bg-black text-white" : ""}`}
                      onClick={() => setShowText(false)}
                    >
                      Video
                    </button>
                    <button
                      className={`h-auto rounded-full px-1 text-[8px] ${showText ? "bg-black text-white" : ""}`}
                      onClick={() => setShowText(true)}
                    >
                      Text
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-background object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};
