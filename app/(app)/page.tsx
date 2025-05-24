import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";
import { Suspense } from "react";

const FEATURED_BLOCKS = ["bento-01", "portofolio-02", "hero-01"];

export default async function IndexPage() {
  return (
    <>
      <Suspense>
        {FEATURED_BLOCKS.map((block) => (
          <div key={block} className="container py-8 first:pt-6 last:border-b-2 dark:border-border   md:py-12">
            <BlockDisplay name={block} />
          </div>
        ))}
      </Suspense>
    </>
  );
}
