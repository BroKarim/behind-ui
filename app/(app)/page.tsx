import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";

const FEATURED_BLOCKS = ["hero-01", "portofolio-01", "hero-02"];

export default async function IndexPage() {
  return (
    <>
      {FEATURED_BLOCKS.map((block) => (
        <div key={block} className="container  border-b border-dashed border-border/50 py-8 first:pt-6 last:border-b-2 dark:border-border   md:py-12">
          <BlockDisplay name={block} />
        </div>
      ))}
    </>
  );
}
