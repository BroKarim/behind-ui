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
      <main className="no-scrollbar relative flex h-screen overflow-x-hidden ">
        <div className="hidden h-screen shrink-0 flex-col gap-2 overflow-y-auto md:flex md:w-[300px] lg:w-[400px]">
          <div className="sticky top-0 z-30 flex h-fit w-full flex-col items-center gap-2 border-b bg-background p-2 sm:static ">
            <h1 className="w-full font-bold">UI Customizer</h1>
            <p className="w-full ">Hit the spacebar, enter a hex code, or tweak the HSL or OKLCH values to create your custom color scale.</p>
          </div>
          <ScrollArea className="h-full w-full flex-1 p-4">
            <ThemeCustomizer />
          </ScrollArea>
        </div>
        {/* Main Content */}
        <div className="relative flex w-full flex-col border-l px-4 md:w-[calc(100%-300px)] md:px-6 lg:w-[calc(100%-400px)]">
          {" "}
          <div id="blocks" className="border-grid scroll-mt-24 border-b">
            <div className="container-wrapper">
              <div className="container flex items-center py-4">
                <BlocksNav />
              </div>
            </div>
          </div>
          <ScrollArea className="h-full w-full ">
            <div className=" flex w-full flex-col items-start gap-2 py-4 md:py-10 lg:py-0">
              <div className="grid h-full w-full grid-cols-1 md:items-center md:justify-center md:gap-8 ">{children}</div>
            </div>
          </ScrollArea>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
