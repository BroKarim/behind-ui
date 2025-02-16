import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "sonner";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SiteHeader />

      <main className="no-scrollbar  h-screen overflow-hidden">
        {" "}
        {/* <Toaster expand={true} className="z-[999999] w-full" position="bottom-right" visibleToasts={9} /> */}
        {children}
        <SiteFooter />
      </main>
    </>
  );
}
