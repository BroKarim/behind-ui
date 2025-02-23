"use client";

import { useState, useEffect } from "react";
import { fontClash } from "@/lib/fonts";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileImage, FolderPen, Text, MapPin } from "lucide-react";
import Image from "next/image";
import "@/styles/mdx.css";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mdx } from "../mdx-components";

type Doc = {
  slug: string;
  title?: string;
  category?: string[];
  body: {
    code: string;
  };
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
          transition={{
            opacity: { duration: 0.2, ease: "easeInOut" },
            width: { duration: 0.4, ease: "easeInOut" },
          }}
          initial={false}
          className="hidden h-screen shrink-0 flex-col gap-2 overflow-y-auto md:flex md:w-[300px] lg:w-[400px]"
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
              </div>
            </div>
          </ScrollArea>
        </motion.div>

        {/* Main Content */}
        <div className="relative flex w-full border-l px-4 md:w-[calc(100%-300px)] md:px-6 lg:w-[calc(100%-400px)]">
          <ScrollArea className="h-full w-full ">
            <div className=" flex w-full flex-col items-start gap-2 py-4 md:py-10 lg:py-0">
              <div className="sticky top-0 z-10 w-full bg-white">
                {" "}
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
                </Tabs>{" "}
              </div>
              <div className="grid h-full w-full grid-cols-1 md:items-center md:justify-center md:gap-8 ">
                {filteredDocs.map((doc) => (
                  <div key={doc.slug} className="mt-4">
                    <Mdx code={doc.body.code} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </>
  );
}
