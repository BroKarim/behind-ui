"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BlocksNav } from "@/components/registry/component-nav";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex h-screen overflow-hidden">
        <div className="hidden h-full w-[300px] flex-col border-r md:flex lg:w-[400px]">
          <div className="sticky top-0 z-30 flex flex-col gap-2 border-b bg-background p-4">
            <p>
              I love building UI components — but let’s be honest, there are tons of those out there already. That’s why I wanted to take a different approach. <br className="mt-4" />
            </p>
            <p className="mt-3">Inspired by ShadCN and TweakCN, It’s about showing how each component adapts and interacts across different design styles.</p>
          </div>
          <ScrollArea className="flex-1 p-4">
            <ThemeCustomizer />
          </ScrollArea>
        </div>
        <div className="flex h-full flex-1 flex-col">
          {" "}
          <div className="z-10 flex items-center justify-center border-b px-4 py-4 bg-background">
            <BlocksNav />
          </div>
          <ScrollArea className="flex-1">
            <div className="px-2 py-6 md:py-10">
              <div className="grid w-full grid-cols-1 gap-8">{children}</div>
            </div>
          </ScrollArea>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
