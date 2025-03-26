import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { ThemeCustomizer } from "@/components/theme-customizer";
import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";
import { BlocksNav } from "@/components/registry/component-nav";

const FEATURED_BLOCKS = ["nextint", "portofolio-01"];

export default async function IndexPage() {
  return (
    <>
      {FEATURED_BLOCKS.map((block) => (
        <div key={block}>
          <BlockDisplay name={block} />
        </div>
      ))}
    </>
  );
}
