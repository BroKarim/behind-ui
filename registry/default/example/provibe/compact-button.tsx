"use client";

import * as React from "react";
import { motion, MotionConfig } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.2,
};

interface CompactButtonProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  searchIcon: React.ReactNode;
  backIcon: React.ReactNode;
}

export function CompactButton({
  placeholder = "Search...",
  onSearch,
  searchIcon,
  backIcon,
}: CompactButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <MotionConfig transition={transition}>
      <div ref={containerRef}>
        <Card className="border-none shadow-none ring-0">
          <motion.div
            animate={{
              width: isOpen ? "300px" : "100px",
            }}
            initial={false}
          >
            <div>
              {!isOpen ? (
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base"
                  onClick={() => setIsOpen(true)}
                >
                  {searchIcon}
                </Button>
              ) : (
                <div className=" relative w-full max-w-sm ">
                  <Input
                    type="email"
                    autoFocus
                    placeholder={placeholder}
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="h-12 w-full rounded-full border border-black bg-white/10 pl-6 pr-12 text-black ring-0  placeholder:text-gray-400 focus-visible:ring-0  focus-visible:ring-offset-0"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-black/20 text-black hover:bg-white/30"
                  >
                    {backIcon}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </Card>
      </div>
    </MotionConfig>
  );
}
