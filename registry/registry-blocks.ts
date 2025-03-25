import { type Registry } from "@/registry/schema";

export const blocks: Registry["items"] = [
  {
    name: "nextint",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "blocks/next-int/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
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
    // categories: ["startup"],
  },
  {
    name: "nextint-02",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "blocks/next-int/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
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
      {
        path: "blocks/next-int/components/drawer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/next-int/components/marquee.tsx",
        type: "registry:component",
      },
    ],
    // categories: ["startup"],
  },
  {
    name: "portofolio-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: ["fade-in", "footer", "list"],
    files: [
      {
        path: "blocks/portofolio-01/main.tsx",
        type: "registry:page",
        target: "app/main.tsx",
      },
      {
        path: "blocks/portofolio-01/components/fade-in.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-01/components/footer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/portofolio-01/components/list.tsx",
        type: "registry:component",
      },
    ],
  },
];
