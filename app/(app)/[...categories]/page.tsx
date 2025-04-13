import { getAllBlockIds } from "@/lib/block";
import { BlockDisplay } from "@/components/registry/component-display";
import { registryCategories } from "@/registry/registry-categories";

export const dynamicParams = false;

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }));
}

export default async function BlocksPage({ params }: { params: { categories?: string[] } }) {
  const blocks = await getAllBlockIds(["registry:block"], params.categories ?? []);

  return blocks.map((name) => (
    <div key={name} className="border-dashed dark:border-border container border-b-black py-8 first:pt-6 last:border-b-2   md:py-12">
      <BlockDisplay name={name} />
    </div>
  ));
}
