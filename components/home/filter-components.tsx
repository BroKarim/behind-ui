// "use client";

// import { useState, useEffect } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mdx } from "../mdx-components";
import { ThemeWrapper } from "../theme-wrapper";
import { ThemeCustomizer } from "../theme-customizer";
import { getAllCategories, documentBelongsToCategory } from "@/lib/registry-client";
import { BlockDisplay } from "../registry/component-display";
import "/public/registry/theme.css";

type Doc = {
  slug: string;
  title?: string;
  // category?: string[];regis
  body: {
    code: string;
  };
};

const FEATURED_BLOCKS = ["nextint", "productivity-card", "biophilic-01"];

export function ClientFilterComponent({ initialDocs }: { initialDocs: Doc[] }) {
  // const [activeCategory, setActiveCategory] = useState("All");
  // const [filteredDocs, setFilteredDocs] = useState<Doc[]>(initialDocs);
  const categories = getAllCategories();

  // Keep track of which components belong to which category

  // useEffect(() => {
  //   const filtered = initialDocs.filter((doc) => documentBelongsToCategory(doc.body.code, activeCategory));

  //   setFilteredDocs(filtered);
  // }, [activeCategory, initialDocs]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const hasShownToast = localStorage.getItem("hasShownToast");
  //     if (!hasShownToast) {
  //       toast("Website is under development.", {
  //         description: "Enjoy exploring, updates coming soon!",
  //         duration: 5000,
  //       });
  //       localStorage.setItem("hasShownToast", "true");
  //     }
  //   }, 100);
  // }, []);

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
          <ScrollArea className="h-full w-full flex-1 p-4">
            <ThemeCustomizer />
          </ScrollArea>
        </motion.div>

        {/* Main Content */}
        <div className="relative flex w-full border-l px-4 md:w-[calc(100%-300px)] md:px-6 lg:w-[calc(100%-400px)]">
          <ScrollArea className="h-full w-full ">
            <div className=" flex w-full flex-col items-start gap-2 py-4 md:py-10 lg:py-0">
              {/* <div className="sticky top-0 z-10 w-full bg-white">
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
              </div> */}
              <div className="grid h-full w-full grid-cols-1 md:items-center md:justify-center md:gap-8 ">
                <ThemeWrapper>
                  {/* {filteredDocs.map((doc) => (
                    <div key={doc.slug} className="mt-4">
                      <Mdx code={doc.body.code} />
                    </div>
                  ))} */}
                  {FEATURED_BLOCKS.map((block) => (
                    <div key={block}>
                      <BlockDisplay name={block} />
                    </div>
                  ))}
                </ThemeWrapper>
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </>
  );
}
