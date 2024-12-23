import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/*
REQUIREMENT FOR NEW FEATURE
- 
- new way to show menu
- expand tab : https://21st.dev/victorwelander/expandable-tabs

*/

export async function SiteHeader() {
  let stars = 300; // Default value

  try {
    const response = await fetch("https://api.github.com/repos/magicuidesign/magicui", {
      headers: process.env.GITHUB_OAUTH_TOKEN
        ? {
            Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
            "Content-Type": "application/json",
          }
        : {},
      next: {
        revalidate: 3600,
      },
    });

    if (response.ok) {
      const data = await response.json();
      stars = data.stargazers_count || stars; // Update stars if API response is valid
    }
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }

  return (
    <header className={cn("supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg")}>
      <div className="container flex h-16 items-center justify-between md:justify-center">
        <div className="mr-4 hidden gap-x-8 md:flex">
          <Link href="/" className="relative mr-6 flex items-center justify-center text-center">
            <Icons.logo1 className="size-12  md:size-8" />
            <span className="hidden text-center font-mono  font-bold md:inline-block">{siteConfig.name}</span>
          </Link>
        </div>
        <MobileNav />
        <div className="flex items-center justify-between gap-2 md:flex-1 md:justify-end">
          <nav className="flex items-center gap-1">
            <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.instagram className="size-4" />
                <span className="sr-only">Instagram</span>
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
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
}
