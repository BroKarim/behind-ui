"use client";

import { useState, useEffect } from "react";
import { fontClash } from "@/lib/fonts";
import Image from "next/image";
import "@/styles/mdx.css";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { GradualSpacing } from "../text-animation";
// import { ComponentSourceTab } from "../component-source-tab";
type Doc = {
  slug: string;
  slugAsParams: string;
  title?: string;
  image?: string;
  category?: string[];
  published?: boolean;
};

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
  "Architecture",
];

export function ClientFilterComponent({ initialDocs }: { initialDocs: Doc[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredDocs, setFilteredDocs] = useState<Doc[]>(initialDocs);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    console.log("Initial Docs:", initialDocs);
    console.log("Active Category:", activeCategory);

    const filtered = initialDocs.filter((doc) => activeCategory === "All" || (doc.category && doc.category.includes(activeCategory)));

    console.log("Filtered Docs:", filtered);
    setFilteredDocs(filtered);
  }, [activeCategory, initialDocs]);

  return (
    <>
      <section className="py-6 ">
        <div className="mb-10 flex h-full flex-col  gap-4  md:mb-0  md:flex-row md:justify-between  md:gap-8">
          <div className="w-full space-y-4 px-4">
            <GradualSpacing text="BehindUI" className={cn("inline-block text-center   uppercase md:text-6xl  xl:text-[18rem] ", fontClash.className)} />
            <h1 className="inline-block text-left text-2xl tracking-tight  md:px-2  lg:text-4xl xl:text-5xl">
              BehindUI is the ultimate source for ready-to-use hero sections and templates | Updated every weekday to keep your creativity flowing effortlessly.
            </h1>
          </div>
        </div>
        <Tabs defaultValue={categories[0]} className="w-full md:my-4">
          <ScrollArea className="whitespace-nowrap">
            <TabsList className="bg-transparent">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)} className="text-md">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar className="w-4 border-none bg-transparent opacity-0" orientation="horizontal" />
          </ScrollArea>
        </Tabs>

        <div className=" grid w-full gap-4 px-4 md:grid-cols-2  md:gap-8 lg:grid-cols-3 ">
          {filteredDocs.map((doc) => (
            <Link href={doc.slugAsParams} key={doc.slug} className="group relative flex flex-col ">
              <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-lg md:h-[250px]`} onMouseEnter={() => setIsHovered(doc.slug)} onMouseLeave={() => setIsHovered(null)}>
                {doc.image && (
                  <Image
                    src={doc.image}
                    alt={doc.title || "Default Alt Text"}
                    className={`h-full w-full object-cover transition-transform duration-500 ${isHovered === doc.slug ? "scale-110" : "scale-100"}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              <div className="card-content ">
                <p className="text-lg font-semibold">{doc.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
