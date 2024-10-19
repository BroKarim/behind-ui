"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { allShowcases } from "content-collections";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allDocs } from "content-collections";
import { Loader2 } from "lucide-react";

import Marquee from "@/registry/default/magicui/marquee";

export interface ShowcaseCardProps {
  title: string;
  image?: string;
  href: string;
  affiliation?: string;
}

const categories = [
  "All",
  "Portofolio",
  "Startup",
  "Agency",
  "Branding",
  "Tools",
  "Finance",
  "E-commerce",
  "SaaS",
  "Non-profit & charity",
  "Food & Drink",
  "Real estate",
  "Photography",
  "Product",
  "App",
  "Education",
  "Blog",
  "Personal",
  "Production Studio",
  "Architecture & Interior design",
];
export function ShowcaseCard({ title, image, href, affiliation }: ShowcaseCardProps) {
  return (
    <Link href={href} className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden">
      <img src={image} alt={title} width={500} height={300} className="size-full max-h-[300px] rounded-xl object-cover" />

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

export default function Showcase() {
  // Tentukan berapa banyak item yang akan ditampilkan awalnya dan setiap kali "Load More" ditekan
  const itemsPerPage = 3;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  // only take folder on componets/
  const docsFromComponents = (allDocs || []).filter((doc) => doc.slugAsParams.startsWith("components/"));
  // console.log(docsFromComponents);
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + itemsPerPage); // Tambah 3 item lagi setiap kali tombol ditekan
  };
  return (
    <section id="showcase" className="container py-14">
      <Tabs defaultValue={categories[0]} className="w-full">
        <ScrollArea className="h-16 w-full whitespace-nowrap rounded-md bg-transparent">
          <TabsList className="bg-transparent">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-md">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" className="w-0 bg-transparent  " />
        </ScrollArea>
      </Tabs>
      <div className="mb-10 grid gap-10 sm:grid-cols-3">
        {docsFromComponents.slice(0, visibleItems).map((doc, idx) => (
          <ComponentShowcase key={idx} {...doc} href={doc.slug} />
        ))}
      </div>

      <div className="mx-0 flex w-full max-w-full  justify-center  py-1 sm:max-w-lg  md:mx-auto">
        {/* NOTE : Will ber redirect to docs/ */}
        {visibleItems < docsFromComponents.length && <Button onClick={handleLoadMore}>Load More</Button>}
      </div>
      {/* marquee */}
      <div className="relative flex flex-col">
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/12 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-1/12 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}

export function ComponentShowcase({ title, image, href, affiliation }: ShowcaseCardProps) {
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
