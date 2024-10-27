import { Mdx } from "@/components/mdx-components";
import { DocPager } from "@/components/pager";
import { badgeVariants } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, cn } from "@/lib/utils";

import "@/styles/mdx.css";

import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { allDocs } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentRecom from "@/components/components-recom";

import { Contribute } from "@/components/contribute";
import { TableOfContents } from "@/components/toc";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

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

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: `${doc.title} | Behind UI`,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: doc.image ?? "/algorithmQuiz.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc || !doc.published) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);
  //filetring, only mdx in components/ will get
  const docsFromComponents = (allDocs || []).filter((doc) => doc.slugAsParams.startsWith("components/"));

  if (!params.slug) {
    return (
      <section className="py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              The Ultimate Source <br />
              for High-Quality Code and Stunning Design
            </h1>
            <p className=" text-base">A curated collection of the best SaaS websites on the web. Updated every*week*day</p>
          </div>
        </div>
        <hr className="my-8" />
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
        <div className="grid w-full gap-9 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:pt-8">
          {docsFromComponents.map((doc) => (
            <Link href={doc.slugAsParams} key={doc.slugAsParams} className="group relative flex flex-col space-y-2">
              {/* seharusnya doc.image, tpi karena kebanyak belum ada jadi dia error, negok aja di   */}
              <img src={doc.image} alt={doc.title} width={500} height={300} className="size-full max-h-[300px] rounded-xl object-cover" />
              <div className="card-content">
                <h2 className="text-2xl font-extrabold">{doc.title}</h2>

                <p>{doc.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
  return (
    <main
      className={cn("relative py-6 lg:py-8  ", {
        "xl:grid-cols-[1fr_300px]": doc.toc,
      })}
    >
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRightIcon className="size-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>{doc.title}</h1>
          {doc.description && <p className="text-balance text-lg text-muted-foreground">{doc.description}</p>}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link href={doc.links.doc} target="_blank" rel="noreferrer" className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}>
                Docs
                <ExternalLinkIcon className="size-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link href={doc.links.api} target="_blank" rel="noreferrer" className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}>
                API Reference
                <ExternalLinkIcon className="size-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        {/* <ComponentRecom /> */}
        <DocPager doc={doc} />
        {/* you mya also like */}
      </div>
      {/* {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] space-y-4 py-12">
                <TableOfContents toc={toc} />
                <Contribute doc={doc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )} */}
    </main>
  );
}
