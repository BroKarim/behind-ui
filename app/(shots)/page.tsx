import { allDocs } from "content-collections";
import { notFound } from "next/navigation";

// import { ClientFilterComponent } from "@/components/home/filter-components";
import { ClientFilterComponent } from "@/components/home/new-filter-components";
interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export default async function Home({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });
  if (!doc || !doc.published) {
    notFound();
  }
  const docsFromComponents = (allDocs || []).filter((doc) => doc.slugAsParams.startsWith("components/"));
  return <ClientFilterComponent initialDocs={docsFromComponents} />;
}
