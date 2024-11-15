import { docsConfig } from "@/config/docs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebarNav } from "@/components/sidebar-nav";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return <div className=" flex-1 items-start  md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">{children}</div>;
}
