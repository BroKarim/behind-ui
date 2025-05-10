"use client";

import { cn } from "@/lib/utils";
import { useState, createContext, useContext, useEffect } from "react";
import { motion, MotionValue, SpringOptions, useMotionValue, useSpring, useTransform } from "framer-motion";

// Existing ImageComparison components
const ImageComparisonContext = createContext<
  | {
      sliderPosition: number;
      setSliderPosition: (pos: number) => void;
      motionSliderPosition: MotionValue<number>;
    }
  | undefined
>(undefined);

type ImageComparisonProps = {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS = {
  bounce: 0,
  duration: 0,
};

function ImageComparison({ children, className, enableHover, springOptions }: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(motionValue, springOptions ?? DEFAULT_SPRING_OPTIONS);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && !enableHover) return;

    const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX - containerRect.left : (event as React.MouseEvent).clientX - containerRect.left;

    const percentage = Math.min(Math.max((x / containerRect.width) * 100, 0), 100);
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  return (
    <ImageComparisonContext.Provider value={{ sliderPosition, setSliderPosition, motionSliderPosition }}>
      <div
        className={cn("relative select-none overflow-hidden", enableHover && "cursor-ew-resize", className)}
        onMouseMove={handleDrag}
        onMouseDown={() => !enableHover && setIsDragging(true)}
        onMouseUp={() => !enableHover && setIsDragging(false)}
        onMouseLeave={() => !enableHover && setIsDragging(false)}
        onTouchMove={handleDrag}
        onTouchStart={() => !enableHover && setIsDragging(true)}
        onTouchEnd={() => !enableHover && setIsDragging(false)}
      >
        {children}
      </div>
    </ImageComparisonContext.Provider>
  );
}

const ImageComparisonImage = ({ className, alt, src, position }: { className?: string; alt: string; src: string; position: "left" | "right" }) => {
  const { motionSliderPosition } = useContext(ImageComparisonContext)!;
  const leftClipPath = useTransform(motionSliderPosition, (value) => `inset(0 0 0 ${value}%)`);
  const rightClipPath = useTransform(motionSliderPosition, (value) => `inset(0 ${100 - value}% 0 0)`);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      style={{
        clipPath: position === "left" ? leftClipPath : rightClipPath,
      }}
    />
  );
};

const ImageComparisonSlider = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  const { motionSliderPosition } = useContext(ImageComparisonContext)!;
  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      className={cn("absolute inset-y-0 w-1 cursor-ew-resize", className)}
      style={{
        left,
      }}
    >
      {children}
    </motion.div>
  );
};

// Marquee Component
interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

function Marquee({ className, reverse = false, pauseOnHover = false, children, vertical = false, repeat = 4, ...props }: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// New AutoTransitionImageComparison Component
type AutoTransitionImageComparisonProps = {
  leftSrc: string;
  rightSrc: string;
  alt: string;
  className?: string;
  transitionDuration?: number;
};

function AutoTransitionImageComparison({ leftSrc, rightSrc, alt, className, transitionDuration = 3000 }: AutoTransitionImageComparisonProps) {
  const [isLeftVisible, setIsLeftVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLeftVisible((prev) => !prev);
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [transitionDuration]);

  return (
    <div className={cn(" relative aspect-video w-full", className)}>
      <ImageComparison enableHover={false}>
        <ImageComparisonImage position={isLeftVisible ? "left" : "right"} src={leftSrc} alt={`${alt} - first image`} />
        <ImageComparisonImage position={isLeftVisible ? "right" : "left"} src={rightSrc} alt={`${alt} - second image`} />
        <ImageComparisonSlider className="bg-white" />
      </ImageComparison>
    </div>
  );
}

// Image Comparison Marquee Component
type ImageComparisonMarqueeProps = {
  comparisons: Array<{
    leftSrc: string;
    rightSrc: string;
    alt: string;
  }>;
  className?: string;
  itemClassName?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  transitionDuration?: number;
};

function ImageComparisonMarquee({ comparisons, className, itemClassName, pauseOnHover = false, reverse = false, transitionDuration }: ImageComparisonMarqueeProps) {
  return (
    <Marquee className={className} pauseOnHover={pauseOnHover} reverse={reverse}>
      {comparisons.map((item, index) => (
        <AutoTransitionImageComparison key={index} leftSrc={item.leftSrc} rightSrc={item.rightSrc} alt={item.alt} className={itemClassName} transitionDuration={transitionDuration} />
      ))}
    </Marquee>
  );
}

export { ImageComparison, ImageComparisonImage, ImageComparisonSlider, Marquee, AutoTransitionImageComparison, ImageComparisonMarquee };
