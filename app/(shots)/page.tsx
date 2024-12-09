import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, cn } from "@/lib/utils";
import Image from "next/image";
import "@/styles/mdx.css";
import { allDocs } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "All",
  "Portofolio",
  "Startup",
  "Agency",
  "Branding",
  "Tools",
  "Finance",
  "E-commerce",
  "SaaS",
  "Non-profit & charity",
  "Food & Drink",
  "Real estate",
  "Photography",
  "Product",
  "App",
  "Education",
  "Blog",
  "Personal",
  "Production Studio",
  "Architecture & Interior design",
];
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
  //filetring, only mdx in components/ will get
  const docsFromComponents = (allDocs || []).filter((doc) => doc.slugAsParams.startsWith("components/"));

  return (
    <>
      <section className="py-6 ">
        <div className="mb-10 flex h-72 flex-col items-start gap-4 md:mb-0 md:h-56  md:flex-row  md:justify-between md:gap-8 md:overflow-auto xl:h-64">
          <div className="w-full flex-1 space-y-4 px-4">
            <h1 className="inline-block  text-2xl tracking-tight  lg:text-4xl  xl:text-5xl">
              BehindUI is the ultimate source for ready-to-use hero sections and templates, blending stunning design with seamless code. Discover a curated collection crafted to inspire and streamline your projects, updated every weekday to
              keep your creativity flowing effortlessly.
            </h1>
          </div>
        </div>
        <Tabs defaultValue={categories[0]} className="w-full">
          <ScrollArea className="h-16 w-full whitespace-nowrap rounded-md bg-transparent">
            <TabsList className="bg-transparent">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-md">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" className="w-0 bg-transparent  " />
          </ScrollArea>
        </Tabs>
        <div className=" grid w-full gap-4 px-4 md:grid-cols-2  md:gap-8 lg:grid-cols-4 ">
          {docsFromComponents.map((doc) => (
            <Link href={doc.slugAsParams} key={doc.slug} className="group relative flex flex-col  ">
              <div className="relative aspect-[16/10] w-full md:h-[200px]">
                {doc.image && (
                  <Image src={doc.image} alt={doc.title || "Default Alt Text"} className="object-cover transition-transform duration-300 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                )}
              </div>

              <div className="card-content ">
                <p className="text-lg font-semibold">{doc.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
