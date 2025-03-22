import { type Registry } from "@/registry/schema";

export const blocks: Registry["items"] = [
  {
    name: "nextint",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "example/next-int/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "example/next-int/components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "example/next-int/components/lang-switch.tsx",
        type: "registry:component",
      },
      {
        path: "example/next-int/components/photos.tsx",
        type: "registry:component",
      },
    ],
    // categories: ["startup"],
  },

  {
    name: "biophilic-01",
    type: "registry:example",
    description: "A simple camping hero section.",
    registryDependencies: ["hero"],
    files: [
      {
        path: "example/biophilic-01/page.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "example/biophilic-01/components/hero.tsx",
        type: "registry:component",
      },
    ],
    // categories: ["components"],
  },
];
