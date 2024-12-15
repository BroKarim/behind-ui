// see https://github.com/nextui-org/nextui/blob/canary/apps/docs/app/figma/page.tsx

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import FigmaLogo from "/Users/kiram/Code/magicui/public/figma-comingsoon.png";

export default function FigmaPage() {
  return (
    <>
      <hr className="mb-2 border-2 border-black dark:border dark:border-white" />
      <section className="py-6 ">
        <div className="flex h-96 flex-col items-start  gap-4  md:flex-row md:justify-between md:gap-8">
          <div className="w-full flex-1 space-y-4 px-4">
            <h1 className="inline-block  text-2xl tracking-tight  md:text-4xl lg:text-5xl">
              <span className="mr-8 inline-block"></span>
              BehindUI is the ultimate source for ready-to-use hero sections and templates, blending stunning design with seamless code. Discover a curated collection crafted to inspire and streamline your projects, updated every weekday to
              keep your creativity flowing effortlessly.
            </h1>
            {/* <p className=" text-base">A curated collection of the best SaaS websites on the web. Updated every*week*day</p> */}
          </div>
        </div>
        <hr className="mb-8 mt-16 border-2 border-black dark:border dark:border-white" />

        <div className="flex w-full  flex-col items-center justify-center font-sans md:mb-10">
          <div className="flex max-w-4xl flex-col gap-2 rounded-2xl border-2 border-white/20">
            {/* <Image src={FigmaLogo} alt="Github icon" className="" /> */}
          </div>
          <div className=" mt-[-70px] ">
            <h1 className=" font-display mb-3 flex items-center justify-center  bg-gradient-to-tr from-zinc-400/30 via-white to-white/60 bg-clip-text text-transparent sm:text-4xl md:text-5xl">Coming Soon</h1>
          </div>
        </div>
        {/* <div className="m-auto max-w-2xl text-center">
          <Button>
            Open in Figma
            <ExternalLink />
          </Button>
        </div> */}
      </section>
    </>
  );
}
