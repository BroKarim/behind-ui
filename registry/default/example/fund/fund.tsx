"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarqueeDemoHorizontal, MarqueeDemoVertical } from "./card";

const Fund = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center  overflow-hidden bg-white font-mono dark:bg-black md:h-screen">
        <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between p-6">
          <div className="flex items-start gap-1 text-lg font-medium">
            <Icons.fund />
            fund
          </div>
          <Button>Start Fundraising</Button>
        </nav>

        {/* hero */}
        <section className="relative mx-auto mt-32  flex   w-full items-center justify-center  font-mono">
          <div className="mx-auto  grid max-w-full grid-cols-1 items-center gap-y-8  md:gap-x-8   lg:grid-cols-2 lg:px-8  lg:py-4 xl:gap-x-8">
            <div className="relative block  px-10 md:px-4 md:text-center  lg:text-left">
              <div className="flex flex-col  gap-2 md:items-center lg:items-start">
                <Link href="/">
                  <Button variant="outline" className="flex items-center space-x-2 rounded-full  border-border">
                    <span className="font-mono text-xs">Fund, Fast as flash</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none">
                      <path fill="currentColor" d="M8.783 6.667H.667V5.333h8.116L5.05 1.6 6 .667 11.333 6 6 11.333l-.95-.933 3.733-3.733Z" />
                    </svg>
                  </Button>
                </Link>
                <h1 className="mt-6 text-[30px] font-medium leading-none md:text-[60px]">
                  Our goal
                  <br /> empowering lives.
                </h1>

                <p className="mt-4 max-w-[600px] text-[#878787] md:mt-6">
                  {/* !make more hooking */}
                  Fundraise at the speed of thought! Elvate you cause in just minute with our lightning-fast fundraising platform
                </p>

                <div className="mt-8">
                  <div className="flex items-center space-x-4">
                    <Link href="/">
                      <Button variant="outline" className="h-12 border border-primary px-6">
                        Talk to us
                      </Button>
                    </Link>

                    <a href="/">
                      <Button className="h-12 px-5">Join Now</Button>
                    </a>
                  </div>
                </div>

                <p className="mt-8 font-mono text-xs text-[#707070]">
                  Trusted by more than{" "}
                  <Link href="/">
                    <span className="underline">5800+</span>
                  </Link>{" "}
                  communities.
                </p>
              </div>
            </div>

            <div className="block flex-none md:absolute md:-right-[200px] md:-top-[220px] md:mt-0  md:h-screen md:max-w-xl xl:-top-[250px] xl:right-[10px] xl:pl-10">
              <div className="hidden lg:block">
                <MarqueeDemoVertical />
              </div>
              <div className="block w-full md:hidden">
                <MarqueeDemoHorizontal />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Fund;
