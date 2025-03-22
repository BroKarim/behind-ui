import { useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Play } from "lucide-react";

export default function LogoHover() {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const x = useMotionValue(0);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    },
    [x],
  );

  return (
    <div
      className="relative h-[80px] w-[100px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered && (
          // change with your own logo
          <motion.img
            src="/theo-logo.png"
            alt="Wegic Logo"
            className="absolute inset-0 h-full w-full object-contain"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex w-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="flex h-10 w-full items-center  justify-center gap-2 rounded-md border border-black  bg-white py-2"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowVideo(true)}
              onMouseLeave={() => setShowVideo(false)}
            >
              <Play size={16} fill="white" strokeWidth={2} aria-hidden="true" />
              <p className="flex text-[10px] font-semibold">watch video</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Video Tooltip */}
      <AnimatePresence mode="popLayout">
        {showVideo && (
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
              width: "200px",
              height: "auto",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: x,
            }}
            className="absolute top-full z-50 mt-2"
          >
            <motion.div className="overflow-hidden rounded-md ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZK-rNEhJIDs?si=KBECTf4W-b_37Xsn&amp;autoplay=1&mute=1&controls=0"
                title="YouTube video player"
                className="h-full w-full rounded-md border-[1px] border-white object-cover ring-1 ring-black/5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
