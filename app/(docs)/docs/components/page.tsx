import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { allDocs } from "@/.content-collections/generated";
/*
Klo bigung gimana cara nge buat kayak AceternityUI

ikutin aja Taxonomy, karena kita juga bakal pake mapping kayak dia

https://github.com/shadcn-ui/taxonomy/blob/main/app/(marketing)/blog/page.tsx

*/
export default function ComponentPage() {
  // const docsFromComponents = allDocs.filter((doc) => doc.directory.includes("docs/components"));
  //filetring, only mdx in components/ will get
  const docsFromComponents = (allDocs || []).filter((doc) => doc.slugAsParams.startsWith("components/"));
  return (
    <section className="py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-heading inline-block text-4xl tracking-tight lg:text-5xl">Created with Love by Brokarim</h1>
          <p className=" text-xl">A blog built using Contentlayer. Posts are written in MDX.</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
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
