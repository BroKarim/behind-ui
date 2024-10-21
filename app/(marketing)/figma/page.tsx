// see https://github.com/nextui-org/nextui/blob/canary/apps/docs/app/figma/page.tsx

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
export default function FigmaPage() {
  return (
    <>
      <main className="container relative z-10 mx-auto mb-12 min-h-[calc(100vh_-_64px_-_108px)] max-w-7xl grow px-6">
        <section className="mt-12 flex w-full flex-col items-center gap-6 lg:px-16">
          <div className="max-w-xl text-center">
            <h1 className="mb-2 text-4xl font-bold">NextUI Figma Kit</h1>
            <h5 className="text-default-500 text-lg">A Figma file that contains the basis of the NextUI design system to help you design your applications.</h5>
          </div>
          <iframe
            className="dark:border-default-200/50 object-fit aspect-video w-full rounded-xl border border-transparent shadow-lg"
            height="600"
            src="https://embed.figma.com/file/1267584376234254760/hf_embed?community_viewer=true&embed_host=nextui"
            title="NextUI Figma Kit"
            width="800"
          />
          <div className="m-auto max-w-2xl text-center">
            <Button>
              Open in Figma
              <ExternalLink />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
