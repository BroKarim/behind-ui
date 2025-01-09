"use client";

import { cn } from "@/lib/utils";

import AnimatedBackground from "./animated-bg-tab";

function TabDemo() {
  const TAB = [
    {
      name: "Overview",
    },
    {
      name: "Projects",
    },
    {
      name: "Package",
    },
  ];
  return (
    <nav className=" absolute bottom-4 left-1/2  z-30 mb-4  flex md:mb-0 md:-translate-x-1/2  ">
      <div className="flex w-full space-x-2 rounded-full border border-zinc-950/10 bg-white p-2 px-4">
        <AnimatedBackground
          defaultValue={TAB[0].name}
          className="rounded-full bg-black"
          enableHover={true}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TAB.map((menu, index) => (
            <button
              key={menu.name}
              data-id={menu.name}
              type="button"
              className={cn(
                "relative flex h-9 items-center   px-3    text-black transition-colors duration-100 hover:text-neutral-500 hover:no-underline focus-visible:outline-2 data-[checked=true]:text-white dark:hover:text-neutral-300",
              )}
            >
              {menu.name}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </nav>
  );
}

export { TabDemo };
