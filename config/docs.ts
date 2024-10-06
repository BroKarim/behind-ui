import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
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
          title: "NFT Hero",
          href: `/docs/components/nft-hero`,
          items: [],
          label: "New",
        },
        {
          title: "Bento Grid",
          href: `/docs/components/bento-grid`,
          items: [],
        },
        {
          title: "Animated List",
          href: `/docs/components/animated-list`,
          items: [],
        },
        {
          title: "Dock",
          href: `/docs/components/dock`,
          items: [],
          label: "",
        },
      ],
    },

    // ntar special effect itu berbayar, sisanya dribble style
    {
      title: "Special Effects",
      items: [
        {
          title: "Animated Beam",
          href: `/docs/components/animated-beam`,
          items: [],
          label: "paid",
        },

        {
          title: "Meteors",
          href: `/docs/components/meteors`,
          items: [],
        },
      ],
    },

    // background bakal tetap ada karena dia mirip UI
    {
      title: "Backgrounds",
      items: [
        {
          title: "Flickering Grid",
          href: `/docs/components/flickering-grid`,
          items: [],
          label: "",
        },
        {
          title: "Animated Grid Pattern",
          href: `/docs/components/animated-grid-pattern`,
          items: [],
          label: "",
        },
        {
          title: "Retro Grid",
          href: `/docs/components/retro-grid`,
          items: [],
        },
        {
          title: "Ripple",
          href: `/docs/components/ripple`,
          items: [],
        },
        {
          title: "Dot Pattern",
          href: `/docs/components/dot-pattern`,
          items: [],
        },
        {
          title: "Grid Pattern",
          href: `/docs/components/grid-pattern`,
          items: [],
        },
      ],
    },
  ],
};
