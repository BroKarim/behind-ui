import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";

const FEATURED_BLOCKS = ["hero-01", "portofolio-01", "hero-02"];

export default async function IndexPage() {
  return (
    <>
      {FEATURED_BLOCKS.map((block) => (
        <div key={block} className="border-dashed  border-border/50 dark:border-border container border-b py-8 first:pt-6 last:border-b-2   md:py-12">
          <BlockDisplay name={block} />
        </div>
      ))}
    </>
  );
}
