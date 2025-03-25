import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="no-scrollbar  h-screen overflow-hidden">
        {children}
        <SiteFooter />
      </main>
    </>
  );
}
