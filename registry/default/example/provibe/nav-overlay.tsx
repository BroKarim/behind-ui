"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "../components/animated-group";
import HashTag from "./hashtag-illustration";

export default function NavigationOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleNav}
          className="text-4xl font-light transition-colors hover:text-gray-600"
        >
          {" "}
          About{" "}
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 isolate z-50 ">
          {/* Backdrop overlay */}

          <nav className="relative z-50 flex h-full w-full  max-w-full items-center justify-between p-8">
            <div className="space-y-12">
              {/* Main Navigation */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">MAIN</div>
                {[
                  "UI/UX",
                  "App Design",
                  "Visual Identity",
                  "Illustrations",
                  "UI Animations",
                ].map((item) => (
                  <AnimatedGroup
                    key={item} // Move key here
                    variants={{
                      container: {
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      },
                      item: {
                        hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
                        visible: {
                          opacity: 1,
                          x: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 1.2,
                            type: "spring",
                            bounce: 0.3,
                          },
                        },
                      },
                    }}
                  >
                    <Button className="rounded-full bg-[#e6e6e6] px-4 text-black">
                      {item}
                    </Button>
                  </AnimatedGroup>
                ))}
              </div>

              {/* Additional Links */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">
                  ADDITIONAL
                </div>
                {["Gumroad", "Linkedin", "Twitter", "Dribbble"].map((item) => (
                  <AnimatedGroup
                    key={item}
                    variants={{
                      container: {
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      },
                      item: {
                        hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
                        visible: {
                          opacity: 1,
                          x: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 1.2,
                            type: "spring",
                            bounce: 0.3,
                          },
                        },
                      },
                    }}
                  >
                    <Button className="rounded-full px-4">{item}</Button>
                  </AnimatedGroup>
                ))}
              </div>

              {/* Contacts */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">
                  CONTACTS
                </div>
                <AnimatedGroup
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 1.2,
                          type: "spring",
                          bounce: 0.3,
                        },
                      },
                    },
                  }}
                >
                  <a
                    href="mailto:example@email.com"
                    className="block text-xl transition-colors hover:text-gray-600"
                  >
                    example@email.com
                  </a>
                  <div className="text-xl">Discord (@username)</div>
                </AnimatedGroup>
              </div>

              {/* Close Button */}
              <button
                onClick={toggleNav}
                className="fixed bottom-8 left-8 text-4xl font-light transition-colors hover:text-gray-600"
              >
                Close
              </button>
            </div>
            <HashTag />
          </nav>
          <div className="absolute inset-0 bg-white/60 " onClick={toggleNav} />
        </div>
      )}
    </>
  );
}
