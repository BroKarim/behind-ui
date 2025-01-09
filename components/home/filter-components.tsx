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
import { toast } from "sonner";

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

  useEffect(() => {
    // Wrap in setTimeout to ensure it runs after hydration
    setTimeout(() => {
      const hasShownToast = localStorage.getItem("hasShownToast");
      if (!hasShownToast) {
        toast("Website is under development.", {
          description: "Enjoy exploring, updates coming soon!",
          duration: 5000, // 5 seconds
        });
        localStorage.setItem("hasShownToast", "true");
      }
    }, 100);
  }, []);

  return (
    <>
      <section className="py-6 font-mono">
        <div className="container flex flex-col items-start gap-1 py-8 md:items-center md:py-10 md:text-center lg:py-12">
          <h1 className={cn("text-3xl font-bold  leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]")}>
            When <span className="text-[#ff9ffa]">Dribble</span> Meet <span className="text-[#42b27f]">Code</span>
          </h1>
          <p className={cn("max-w-3xl text-balance  font-light text-foreground sm:text-lg")}>
            Behind every stunning UI is a strong foundation. BehindUI delivers ready to use components and sections to bring your designs to life.
          </p>
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
