import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";

const FEATURED_BLOCKS = ["hero-01", "portofolio-01", "hero-02"];

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
