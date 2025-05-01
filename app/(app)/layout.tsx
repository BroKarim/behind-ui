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
      <main className="no-scrollbar relative flex h-screen overflow-hidden ">
        <div className="hidden h-screen shrink-0 flex-col gap-2 overflow-y-auto font-sans md:flex md:w-[300px] lg:w-[400px]">
          <div className="sticky top-0 z-30 flex h-fit w-full flex-col items-center gap-2 border-b bg-background p-2 px-4 sm:static ">
            <h1 className="w-full font-bold">Customizer</h1>
            <p className="w-full ">Designed for effortless use—just copy and paste! Make your work with ShadCN and Tailwind faster, cleaner, and visually stunning.</p>
          </div>
          <ScrollArea className="h-full w-full flex-1 p-4">
            <ThemeCustomizer />
          </ScrollArea>
        </div>
        {/* Main Content */}
        <div className="relative flex w-full flex-col border-l  md:w-[calc(100%-300px)]  lg:w-[calc(100%-400px)]">
          {" "}
          <div className=" flex w-full items-center justify-center px-0 py-4">
            <BlocksNav />
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
