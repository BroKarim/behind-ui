import { Mdx } from "@/components/mdx-components";
import { DocPager } from "@/components/pager";
import { badgeVariants } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, cn } from "@/lib/utils";
import Image from "next/image";
import "@/styles/mdx.css";

import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { allDocs } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main
      className={cn("relative gap-4 px-4 py-6 lg:py-8 xl:flex", {
        "xl:grid-cols-[1fr_300px]": doc.toc,
      })}
    >
      <div className="mx-auto w-full min-w-0 font-mono">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <Link href="/" className="cursor-pointer truncate">
            Shots
          </Link>
          <ChevronRightIcon className="size-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>{doc.title}</h1>
          {doc.description && <p className="max-w-2xl text-balance text-lg text-muted-foreground">{doc.description}</p>}
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
        <DocPager doc={doc} />
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
