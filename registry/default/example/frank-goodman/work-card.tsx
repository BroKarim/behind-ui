"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "./morphic-dialog";
interface Media {
  type: "image" | "video";
  src: string;
}

interface WorkCardProps {
  title: string;
  category: string[];
  media: Media;
}

export function WorkCard({ title, media, category }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <MorphingDialog
        transition={{
          type: "spring",
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <MorphingDialogTrigger
          className="group relative block aspect-square h-[32rem] w-full overflow-hidden  rounded-lg bg-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {media.type === "video" ? (
            <video
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          ) : (
            <img
              src={media.src}
              alt={title}
              className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-start justify-between p-4">
            <h3 className=" rounded-full bg-slate-50 px-4 py-0 text-left font-sans text-sm font-medium text-black transition-opacity group-hover:bg-black group-hover:text-white md:text-base">
              {title}
            </h3>
            <ArrowUpRight className="h-8 w-8 rounded-full bg-gray-300 p-1 text-black   group-hover:bg-[hsla(0,0%,100%,.1)]" />
          </div>
          <motion.div
            className={`absolute bottom-3 z-40 flex w-full gap-1 p-8  `}
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {category.map((cat, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -20,
                }}
                transition={{
                  delay: isHovered ? index * 0.05 : 0,

                  stiffness: 300,
                }}
                className="rounded-full bg-white px-4 py-0 text-left font-sans text-sm font-medium text-black opacity-0 transition-opacity group-hover:opacity-100 md:text-base"
              >
                {cat}
              </motion.p>
            ))}
          </motion.div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent
            style={{
              borderRadius: "8px",
            }}
            className="pointer-events-auto relative  h-auto w-full bg-white  dark:border-zinc-50/10 dark:bg-zinc-900 md:h-[32rem] md:w-[800px]"
          >
            {media.type === "video" ? (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
              />
            ) : (
              <MorphingDialogImage
                src={media.src}
                alt={title}
                className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
              />
            )}

            <div className="absolute bottom-2 flex flex-col px-6 py-8">
              <MorphingDialogTitle className="text-2xl text-white dark:text-zinc-50">
                {title}
              </MorphingDialogTitle>
              <motion.div className={` z-40 flex w-full gap-1 py-4 `}>
                {category.map((cat, index) => (
                  <p
                    key={index}
                    className="rounded-full bg-white px-4 py-0 text-left font-sans text-sm font-medium text-black md:text-base  "
                  >
                    {cat}
                  </p>
                ))}
              </motion.div>

              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <p className="mt-2 text-[12px] text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur..
                </p>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-50" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </>
  );
}
