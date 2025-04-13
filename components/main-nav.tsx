"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import posthog from "posthog-js";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex  gap-x-8 md:mr-4">
      <Link href="/" className="relative flex items-center justify-center text-center md:mr-6">
        <Icons.logo1 className="size-0  md:size-8" />
        <span className=" inline-block text-center  font-mono font-bold">{siteConfig.name}</span>
      </Link>
      {/* 

      NOTE: Navigation component prepared for future main navigation bar.
            Currently not displayed, but retained for upcoming features or layout updates.

      <nav className=" items-center font-medium  md:flex md:space-x-6">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            aria-label={item.title}
            onClick={() => item.event && posthog.capture(item.event)}
            target={item.external ? "_blank" : undefined}
            className={cn("flex items-center justify-center transition-colors hover:text-foreground/80", pathname?.startsWith(item.href!) ? "text-foreground" : "text-foreground/60")}
          >
            <span className="shrink-0">{item.title}</span>
            {item.label && <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">{item.label}</span>}
            {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))}
      </nav> 
      
      */}
    </div>
  );
}
