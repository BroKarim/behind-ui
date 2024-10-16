import { allDocs } from "content-collections";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function Hero() {
  const post = allDocs
    .filter((post) => post.date && post.date <= new Date().toISOString() && post.published)
    .sort((a, b) => {
      if (!a.date && !b.date) return 0; // Both dates are undefined, keep original order
      if (!a.date) return 1; // Move a to the end if date is undefined
      if (!b.date) return -1; // Move b to the end if date is undefined
      return compareDesc(new Date(a.date), new Date(b.date)); // Both dates are defined, proceed with comparison
    })[0];

  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 ">
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              {/* NOTE : 
                 will be redirected to doc/component */}
              <Link
                href={post.slug}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "rounded-full"
                )}
              >
                For the love of beautiful & functional
                <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
              </Link>
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">When Dribble Meets Code</h1>
              </div>

              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:max-w-4xl md:text-center md:text-lg ">
                Ready to use world class headline components for your website with the backbone of clean code.
              </p>

              <div className="mx-0 flex w-full max-w-full  justify-center  py-1 sm:max-w-lg  md:mx-auto">
                {/* NOTE : Will ber redirect to docs/ */}
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
