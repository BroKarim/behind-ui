"use client";

import { useState, useEffect } from "react";
import { fontClash } from "@/lib/fonts";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Menu, PanelLeft, FileImage, FolderPen, Text, MapPin } from "lucide-react";
import Image from "next/image";
import "@/styles/mdx.css";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
      <main className="relative flex h-screen overflow-hidden p-0">
        {/* Edit Tool */}
        <motion.div
          animate={{
            width: "500px",
          }}
          transition={{
            opacity: { duration: 0.2, ease: "easeInOut" },
            width: { duration: 0.4, ease: "easeInOut" },
          }}
          initial={false}
          className={` flex h-screen flex-col gap-2 overflow-y-auto`}
        >
          <div className="sticky top-0 z-30 flex h-12 w-full items-center border-b bg-background pl-1 sm:static ">
            <h1 className="w-full font-bold">Editing Header</h1>
          </div>
          {/* Scrollable Blocks List */}
          <ScrollArea className="h-full w-full flex-1">
            <div className="p-4">
              {/* Search Input - Fixed at top of scroll area */}
              <input type="text" placeholder="Filter blocks" className="w-full rounded-md border bg-background px-3 py-2" />

              {/* Blocks List - Scrollable */}
              <div className="mt-4 space-y-4">
                <Button className="h-auto w-full justify-start gap-4 border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <FileImage className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col items-start gap-1 text-black">
                    <Label htmlFor="email">Avatar</Label>
                    <div className="text-sm text-muted-foreground">tess</div>
                  </div>
                </Button>
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <FolderPen className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Name</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                </div>
                {/* Location tambah aj, ntar bebas mau di pake atau ngak */}
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Location</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                </div>
                {/* Desc */}
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Text className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Description</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Text className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Description</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Text className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Description</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Text className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Description</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-auto  w-full  flex-col gap-4 rounded-md border bg-background p-2 shadow-none hover:bg-accent">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Text className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-1 text-black">
                      <Label htmlFor="email">Description</Label>
                      <div className="text-sm text-muted-foreground">tess</div>
                    </div>
                  </div>
                </div>

                {/* Example block items */}
              </div>
            </div>
          </ScrollArea>
        </motion.div>

        {/* Main Content */}
        <div className="relative mx-auto flex w-full flex-1 flex-col items-center justify-center  gap-6 border-l p-2">
          <ScrollArea className="h-full w-full flex-1 ">
            <div className="flex flex-col  items-center justify-center rounded-md p-6">
              <div className="container flex w-full flex-col items-start gap-4 py-8 md:py-10 lg:py-0 ">
                {/* <Tabs defaultValue={categories[0]} className="w-full md:my-4">
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
                </Tabs> */}
                <div className="flex flex-col md:gap-8">
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
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </>
  );
}
