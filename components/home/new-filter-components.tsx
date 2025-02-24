"use client";

import { useState, useEffect } from "react";
import { fontClash } from "@/lib/fonts";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Moon, Sun, Text, MapPin, Check } from "lucide-react";
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
interface ColorOption {
  name: string;
  value: string;
  color: string;
}
interface RadiusOption {
  value: string;
  label: string;
}

const colors: ColorOption[] = [
  { name: "Zinc", value: "zinc", color: "bg-zinc-950" },
  { name: "Red", value: "red", color: "bg-red-500" },
  { name: "Rose", value: "rose", color: "bg-rose-500" },
  { name: "Orange", value: "orange", color: "bg-orange-500" },
  { name: "Green", value: "green", color: "bg-green-500" },
  { name: "Blue", value: "blue", color: "bg-blue-500" },
  { name: "Yellow", value: "yellow", color: "bg-yellow-400" },
  { name: "Violet", value: "violet", color: "bg-violet-500" },
];

const radiusOptions: RadiusOption[] = [
  { value: "0", label: "0" },
  { value: "0.3", label: "0.3" },
  { value: "0.5", label: "0.5" },
  { value: "0.75", label: "0.75" },
  { value: "1.0", label: "1.0" },
];

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
          <div className="sticky top-0 z-30 flex h-fit w-full flex-col items-center gap-2 border-b bg-background p-2 sm:static ">
            <h1 className="w-full font-bold">UI Customizer</h1>
            <p className="w-full ">Hit the spacebar, enter a hex code, or tweak the HSL or OKLCH values to create your custom color scale.</p>
          </div>
          {/* Scrollable Blocks List */}
          <ScrollArea className="h-full w-full flex-1">
            <div className="p-4">
              <div className="mt-4 space-y-4">
                {/* Mode opt */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Mode</h3>
                  <div className="flex gap-4">
                    <button className="inline-flex items-center justify-center space-x-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-gray-50">
                      <Sun className="h-4 w-4" />
                      <span>Light</span>
                    </button>
                    <button className="inline-flex items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-gray-50">
                      <Moon className="h-4 w-4" />
                      <span>Dark</span>
                    </button>
                  </div>
                </div>
                {/* Color opt */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Color</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        className={`inline-flex items-center justify-start space-x-3 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-gray-50 ${
                          color.value === "green" ? "border-2 border-black" : "border-gray-200"
                        }`}
                      >
                        <span className={`h-4 w-4 rounded-full ${color.color}`}>{color.value === "green" && <Check className="h-4 w-4 text-white" />}</span>
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* radius opt */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Radius</h3>
                  <div className="flex flex-wrap gap-4">
                    {radiusOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`inline-flex min-w-[60px] items-center justify-center rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-gray-50 ${
                          option.value === "1.0" ? "border-2 border-black" : "border-gray-200"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
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
