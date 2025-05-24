import { SiteHeader } from "@/components/site-header";

export default function ChangelogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-grow flex-col">{children}</main>
    </div>
  );
}
