import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs/display/",
    },
    {
      title: "Templates",
      href: "https://pro.magicui.design",
      event: "header_cta_clicked",
      label: "New",
    },
    {
      title: "Showcase",
      href: "/showcase",
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
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Install Nextjs",
          href: "/docs/installation",
        },
        {
          title: "Install TailwindCSS",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Install Shadcn",
          href: "/docs/shadcn",
          items: [],
        },
      ],
    },

    {
      title: "All Design",
      items: [
        {
          title: "Hero Video Dialog",
          href: `/docs/components/hero-video-dialog`,
          items: [],
          label: "",
        },
        {
          title: "SaaS Hero One",
          href: `/docs/components/saas-hero-one`,
          items: [],
          label: "New",
        },
        {
          title: "SaaS Hero Two",
          href: `/docs/components/saas-hero-two`,
          items: [],
          label: "New",
        },
        {
          title: "SaaS Hero Two",
          href: `/docs/components/saas-hero-three`,
          items: [],
          label: "New",
        },
        {
          title: "ProjectPath",
          href: `/docs/components/saas-hero-four`,
          items: [],
          label: "New",
        },
        {
          title: "Nexus",
          href: `/docs/components/saas-hero-five`,
          items: [],
          label: "New",
        },
        {
          title: "Finnpay",
          href: `/docs/components/saas-hero-six`,
          items: [],
          label: "New",
        },
      ],
    },

    // ntar special effect itu berbayar, sisanya dribble style
    {
      title: "Special Effects",
      items: [
        {
          title: "NFT Hero Effect",
          href: `/docs/components/nft-hero`,
          items: [],
          label: "paid",
        },
      ],
    },

    // background bakal tetap ada karena dia mirip UI
    {
      title: "Backgrounds",
      items: [
        {
          title: "NFT Hero Backgournd",
          href: `/docs/components/nft-hero`,
          items: [],
          label: "paid",
        },
      ],
    },
  ],
};
