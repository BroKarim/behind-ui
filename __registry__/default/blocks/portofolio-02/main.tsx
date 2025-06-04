import { BioDetails } from "./components/bio-detail";
import { Bio } from "./components/bio";

import { CareerPaths } from "./components/career-path";
import { Highlight } from "./components/highlight";

import { cn } from "@/lib/utils";

function Divider() {
  return (
    <div
      className={cn(
        "border-grid relative flex h-4 w-full border-x",
        "before:absolute before:-left-[100vw] before:h-4 before:w-[200vw]",
        "before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5 before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px]",
      )}
    />
  );
}

export default function Main() {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex h-screen flex-col items-center justify-between overflow-x-hidden">
        <div className="mx-auto px-4 text-primary md:max-w-3xl">
          <Bio />
          <Divider />
          <main>
            <Highlight />
            <Divider />

            <BioDetails />
            <Divider />

            <CareerPaths />
            <Divider />

            <Divider />
          </main>
        </div>
      </div>
    </>
  );
}
