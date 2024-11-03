import { ChevronRight } from "lucide-react";

export function Banner() {
  return (
    <div className="group relative top-0 border  bg-gradient-to-tr from-white to-stone-100 py-3 font-mono transition-all duration-300  dark:from-zinc-900 dark:to-zinc-950 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <a
          href="https://pro.magicui.design"
          target="_blank"
          className="inline-flex text-xs leading-normal "
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            We raise more $30M series B form X and meta
          </span>{" "}
          <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </a>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
