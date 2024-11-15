import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Explore",
      href: "/shots/",
    },

    {
      title: "Figma",
      href: "/figma",
    },
    {
      title: "FAQs",
      href: "/faq",
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
          label: "New",
        },
        {
          title: "Maria & Co.",
          href: `/docs/components/maria-and-co`,
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
