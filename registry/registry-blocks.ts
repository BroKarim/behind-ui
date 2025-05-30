import { type Registry } from "@/registry/schema";

export const blocks: Registry["items"] = [
  {
    name: "embed-01",
    type: "registry:block",
    description: "reusable Figma frame",
    registryDependencies: ["mac-terminal", "figma", "iframe"],
    files: [
      {
        path: "blocks/embed-01/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "blocks/embed-01/components/figma-embed.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/embed-01/components/window.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/embed-01/components/window-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["embed"],
  },
  {
    name: "card-03",
    type: "registry:block",
    description:
      "Information cards to deliver news, updates, and alerts to your users by KL UI",
    registryDependencies: ["chart", "sidebar"],
    files: [
      {
        path: "blocks/card-03/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "blocks/card-03/components/nav-panel.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/card-03/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/card-03/components/nav-documents.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/card-03/components/infor-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/card-03/components/image-content.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/card-03/components/chart-content.tsx",
        type: "registry:component",
      },
      {
        path: "ui/sidebar.tsx",
        type: "registry:ui",
        target: "components/ui/sidebar.tsx",
      },
      {
        path: "ui/chart.tsx",
        type: "registry:ui",
        target: "components/ui/chart.tsx",
      },
    ],
    categories: ["card"],
  },
  {
    name: "card-01",
    type: "registry:block",
    description: "Ideal for product designers.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "blocks/card-01/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "blocks/card-01/components/post-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["card"],
  },
  {
    name: "card-02",
    type: "registry:block",
    description: "Ideal for product designers.",
    registryDependencies: ["pricing", "shades", "currency"],
    files: [
      {
        path: "blocks/card-02/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "blocks/card-02/components/pricing-card.tsx",
        type: "registry:component",
      },
      {
        path: "ui/card.tsx",
        type: "registry:ui",
        target: "components/ui/card.tsx",
      },
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
        target: "components/ui/badge.tsx",
      },
      {
        path: "ui/texture-button.tsx",
        type: "registry:ui",
        target: "components/ui/texture-button.tsx",
      },
      {
        path: "lib/utils.ts",
        type: "registry:ui",
        target: "lib/utils.ts",
      },
    ],
    categories: ["card"],
  },
  {
    name: "hero-01",
    type: "registry:block",
    description: "Ideal for product designers.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "blocks/next-int/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "blocks/next-int/components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/next-int/components/lang-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/next-int/components/photos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
  },
  {
    name: "portofolio-01",
    type: "registry:block",
    description: "minimal portfolio template design for professionals.",
    registryDependencies: ["footer", "list"],
    files: [
      {
        path: "blocks/portofolio-01/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "blocks/portofolio-01/components/footer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-01/components/list.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-01/components/animated-background.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-01/contents/projects.ts",
        type: "registry:file",
        target: "app/data.ts",
      },
    ],
    categories: ["portofolio"],
  },
  {
    name: "portofolio-03",
    type: "registry:block",
    description: "minimal portfolio template design for professionals.",
    registryDependencies: ["footer", "list"],
    files: [
      {
        path: "blocks/portofolio-03/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "blocks/portofolio-03/components/work-experiences.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-03/components/expandable-tab.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-03/components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["portofolio"],
  },
  {
    name: "portofolio-02",
    type: "registry:block",
    description: "minimal portfolio template design for professionals.",
    registryDependencies: ["footer", "list"],
    files: [
      {
        path: "blocks/portofolio-02/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "blocks/portofolio-02/components/bio-detail.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/bio.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/career-path.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/highlight.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/intro-item.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/panel.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/typhography.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/typhography.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/components/tag.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-02/data/career-path.ts",
        type: "registry:file",
        target: "data/career-path.ts",
      },
      {
        path: "blocks/portofolio-02/data/USER.ts",
        type: "registry:file",
        target: "data/USER.ts",
      },
      {
        path: "blocks/portofolio-02/type/career-path.ts",
        type: "registry:file",
        target: "type/career-pat.ts",
      },
    ],
    categories: ["portofolio"],
  },
  {
    name: "hero-02",
    type: "registry:block",
    description: "Designed for library applications.",
    registryDependencies: [
      "banner",
      "colorfulButton",
      "githubButton",
      "openSource",
    ],
    files: [
      {
        path: "blocks/tool-01/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "blocks/tool-01/style/style.css",
        type: "registry:page",
        target: "app/style.css",
      },
      {
        path: "blocks/tool-01/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/tool-01/components/banner.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/tool-01/components/colorful-button.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/tool-01/components/github-button.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/tool-01/components/installer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/tool-01/components/open-source.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/tool-01/components/review.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero", "tool"],
  },
  // TODO: Remove heavy components with excessive animations as they are not suitable for this website
  {
    name: "bento-01",
    type: "registry:block",
    description: "Ideal for product designers.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "blocks/bento-01/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "blocks/bento-01/components/animated-emoji.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento-01/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "ui/card.tsx",
        type: "registry:ui",
        target: "components/ui/card.tsx",
      },
      {
        path: "blocks/bento-01/hooks/useAnimation.tsx",
        type: "registry:file",
        target: "hooks/use-animation.ts",
      },
    ],
    categories: ["bento"],
  },
  {
    name: "tool-02",
    type: "registry:block",
    description: "Before after components.",
    registryDependencies: ["compare"],
    files: [
      {
        path: "blocks/tool-02/page.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "blocks/tool-02/components/compare.tsx",
        type: "registry:component",
      },
      {
        path: "lib/utils.ts",
        type: "registry:ui",
        target: "lib/utils.ts",
      },
    ],
    categories: ["tool"],
  },
];
