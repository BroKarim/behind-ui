import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Elements",
      href: "/",
    },

    {
      title: "Tools",
      href: "/",
    },
    {
      title: "Template",
      href: "/",
    },
    {
      title: "Service",
      href: "/",
    },
  ],
  sidebarNav: [
    {
      title: "Follow",
      items: [
        {
          title: "Twitter @BroKarim",
          href: "https://x.com/BroKariim",
          items: [],
        },
      ],
    },
    {
      title: "All Design",
      items: [
        {
          title: "Clair",
          href: `/docs/components/clair`,
          items: [],
        },
        {
          title: "Maria & Co.",
          href: `/shots/components/maria-and-co`,
          items: [],
        },
        {
          title: "Odama",
          href: `/shots/components/odama`,
          items: [],
        },
        {
          title: "Tirana",
          href: `/shots/components/tirana`,
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
