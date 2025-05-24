import Link from "next/link";

import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className={cn("border-b w-full ")}>
      <div className="flex p-4 items-center justify-between ">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex items-center justify-between gap-2 md:flex-1 md:justify-end">
          <nav className="flex items-center gap-1">
            <Link href={siteConfig.links.threads} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.thread className="size-4" />
                <span className="sr-only">Threads</span>
              </div>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="size-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>

            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="size-4 fill-current" />
                <span className="sr-only">X</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
