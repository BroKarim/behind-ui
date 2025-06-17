import { HyperText } from "@/components/ui/hyper-text";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/animated-group";

export default function TemplatePage() {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };

  return (
    <>
      <div className="w-full bg-backgroud flex items-start justify-start ">
        <div className="max-w-5xl px-16 mt-8">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <h1 className="mt-8 max-w-2xl text-balance text-2xl font-medium md:text-4xl ">Open Source Website Template</h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg">
              Every time I get a new idea, the first thing I do is hunt for an open-source template—because let’s be honest, starting from scratch is pain. I’ve hoarded way too many, so hey... might as well share the stash.
            </p>
            <div className="mt-12 flex items-center gap-2">
              <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                  <Link href="#link">
                    <span className="text-nowrap">Start Building</span>
                  </Link>
                </Button>
              </div>
              <Button key={2} asChild size="lg" variant="ghost" className="h-[42px] rounded-xl px-5 text-base">
                <Link href="#link">
                  <span className="text-nowrap">Request a demo</span>
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </>
  );
}
