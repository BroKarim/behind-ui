import { type Registry } from "@/registry/schema";

export const blocks: Registry["items"] = [
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
    categories: ["hero"],
  },
];
