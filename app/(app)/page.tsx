import { BlockDisplay } from "@/components/registry/component-display";
import "/public/registry/theme.css";

const FEATURED_BLOCKS = ["nextint", "portofolio-01", "tool-01"];

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
