//kit pake code showcase aja
"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
// import { Button } from "../ui/button";
import { allShowcases } from "content-collections";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allDocs } from "content-collections";
import { Loader2 } from "lucide-react";

export interface RecomCardProps {
  title: string;
  image?: string;
  href: string;
  affiliation?: string;
}

export default function ComponentRecom() {
  const docsFromComponents = (allDocs || []).filter((doc) => doc.slugAsParams.startsWith("components/"));

  return (
    <>
      <section className="container py-14">
        <ScrollArea className="h-16 w-full whitespace-nowrap rounded-md bg-transparent">
          <div className="mb-10 grid gap-10 sm:grid-cols-3">
            {docsFromComponents.map((doc, idx) => (
              <ComponentShowcase key={idx} {...doc} href={doc.slug} />
            ))}
          </div>
        </ScrollArea>
      </section>
    </>
  );
}

export function ComponentShowcase({ title, image, href, affiliation }: RecomCardProps) {
  return (
    <Link href={href} className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden">
      <img src={image || "/showcase/aomni.png"} alt={title} width={500} height={300} className="size-full max-h-[300px] rounded-xl object-cover" />

      <div className="flex flex-col">
        <div className="group inline-flex cursor-pointer items-center justify-start gap-1 text-xl font-semibold text-neutral-700 duration-200 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200">
          {title}
          <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
        <p className="text-sm text-neutral-400">{affiliation}</p>
      </div>
    </Link>
  );
}
