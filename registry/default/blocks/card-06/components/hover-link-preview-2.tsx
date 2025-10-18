"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { de } from "date-fns/locale";

interface HoverComponentPreviewProps {
  href?: string;
  previewComponent: React.ReactNode;
  children: React.ReactNode;
  previewClassName?: string;
}

function HoverComponentPreview({ href, previewComponent, children, previewClassName = "" }: HoverComponentPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);
  const prevX = useRef<number | null>(null);

  // Motion values for smooth animation
  const motionTop = useMotionValue(0);
  const motionLeft = useMotionValue(0);
  const motionRotate = useMotionValue(0);

  // Springs for natural movement
  const springTop = useSpring(motionTop, { stiffness: 300, damping: 30 });
  const springLeft = useSpring(motionLeft, { stiffness: 300, damping: 30 });
  const springRotate = useSpring(motionRotate, { stiffness: 300, damping: 20 });

  // Handlers
  const handleMouseEnter = () => {
    setShowPreview(true);
    prevX.current = null;
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
    prevX.current = null;
    motionRotate.set(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const PREVIEW_WIDTH = 300;
    const PREVIEW_HEIGHT = 200;
    const OFFSET_Y = 40;

    // Position the preview
    motionTop.set(e.clientY - PREVIEW_HEIGHT - OFFSET_Y);
    motionLeft.set(e.clientX - PREVIEW_WIDTH / 2);

    // Calculate tilt based on horizontal movement
    if (prevX.current !== null) {
      const deltaX = e.clientX - prevX.current;
      const newRotate = Math.max(-15, Math.min(15, deltaX * 1.2));
      motionRotate.set(newRotate);
    }
    prevX.current = e.clientX;
  };

  const WrapperElement = href ? "a" : "span";
  const linkProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <>
      <WrapperElement {...linkProps} className="relative inline-block cursor-pointer text-blue-600 underline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        {children}
      </WrapperElement>

      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10, rotate: 0 }}
            style={{
              position: "fixed",
              top: springTop,
              left: springLeft,
              rotate: springRotate,
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <div className={`${previewClassName}`}>{previewComponent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Example ProfileCard component
function ProfileCard() {
  return (
    <div className="flex items-center gap-3 min-w-[250px]">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">JD</div>
      <div>
        <h3 className="font-semibold text-gray-900">John Doe</h3>
        <p className="text-sm text-gray-500">Software Engineer</p>
        <p className="text-xs text-gray-400 mt-1">San Francisco, CA</p>
      </div>
    </div>
  );
}

// Example usage demo
export default HoverComponentPreview;
