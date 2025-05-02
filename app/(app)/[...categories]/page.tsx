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
    <div key={name} className="container py-8   md:py-12">
      <BlockDisplay name={name} />
    </div>
  ));
}
