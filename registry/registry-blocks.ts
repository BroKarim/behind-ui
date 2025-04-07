import { type Registry } from "@/registry/schema";

export const blocks: Registry["items"] = [
  {
    name: "nextint",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
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
    categories: ["startup"],
  },

  {
    name: "portofolio-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
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
    name: "tool-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
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
    categories: ["tool"],
  },
];
