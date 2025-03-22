import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { ThemeWrapper } from "@/components/theme-wrapper";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { getAllCategories, documentBelongsToCategory } from "@/lib/registry-client";
import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";
import NextInt from "@/registry/default/example/next-int/page";

const FEATURED_BLOCKS = ["nextint", "biophilic-01"];

export default async function IndexPage() {
  const categories = getAllCategories();

  return (
    <>
      <main className="relative flex h-screen overflow-hidden p-0">
        {/* Edit Tool */}
        <div className="hidden h-screen shrink-0 flex-col gap-2 overflow-y-auto md:flex md:w-[300px] lg:w-[400px]">
          <div className="sticky top-0 z-30 flex h-fit w-full flex-col items-center gap-2 border-b bg-background p-2 sm:static ">
            <h1 className="w-full font-bold">UI Customizer</h1>
            <p className="w-full ">Hit the spacebar, enter a hex code, or tweak the HSL or OKLCH values to create your custom color scale.</p>
          </div>
          {/* Scrollable Blocks List */}
          <ScrollArea className="h-full w-full flex-1 p-4">
            <ThemeCustomizer />
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="relative flex w-full border-l px-4 md:w-[calc(100%-300px)] md:px-6 lg:w-[calc(100%-400px)]">
          <ScrollArea className="h-full w-full ">
            <div className=" flex w-full flex-col items-start gap-2 py-4 md:py-10 lg:py-0">
              <div className="grid h-full w-full grid-cols-1 md:items-center md:justify-center md:gap-8 ">
                {/* <ThemeWrapper> */}
                {FEATURED_BLOCKS.map((block) => (
                  <div key={block}>
                    <BlockDisplay name={block} />
                  </div>
                ))}
                {/* </ThemeWrapper> */}
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </>
  );
}
