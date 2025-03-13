import { type Registry } from "@/registry/schema";

export const examples: Registry["items"] = [
  {
    name: "nextint",
    type: "registry:example",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: ["nav", "lang-switch", "photos"],
    files: [
      {
        path: "example/next-int/next-int.tsx",
        type: "registry:page",
        target: "app/page.tsx",
      },
      {
        path: "example/next-int/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "example/next-int/lang-switch.tsx",
        type: "registry:component",
      },
      {
        path: "example/next-int/photos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["startup"],
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
    categories: ["components"],
  },
];
