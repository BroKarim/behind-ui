import { Registry } from "@/registry/schema";
// Ww9x4eqD)?(e.t3
export const examples: Registry = [
  /* ============= COMPONENTS ============= */
  {
    name: "animated-group",
    type: "registry:example",
    files: ["example/components/animated-group.tsx"],
  },
  {
    name: "animated-bg-tab",
    type: "registry:example",
    files: ["example/components/animated-bg-tab.tsx"],
  },
  {
    name: "animated-video-tooltip",
    type: "registry:example",
    files: ["example/components/animated-video-tooltip.tsx"],
  },
  {
    name: "dynamic-tab-nav",
    type: "registry:example",
    files: ["example/components/dynamic-tab-nav.tsx"],
  },
  /* ============= HERO ONE ============= */
  {
    name: "saas-hero-three",
    type: "registry:example",
    files: ["example/hero-one/hero-one.tsx"],
  },
  {
    name: "saas-hero-three-wrapper",
    type: "registry:example",
    files: ["example/hero-one/hero-one-wrapper.tsx"],
  },
  {
    name: "saas-hero-three-banner",
    type: "registry:example",
    files: ["example/hero-one/hero-one-banner.tsx"],
  },
  {
    name: "saas-hero-three-navbar",
    type: "registry:example",
    files: ["example/hero-one/hero-one-navbar.tsx"],
  },
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
    categories: ["hero", "saas"],
  },

  {
    name: "productivity-card",
    type: "registry:example",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: ["stats", "calender", "activity-goal", "metric"],
    files: [
      {
        path: "example/productivity-components/index.tsx",
        type: "registry:component",
      },
      {
        path: "example/productivity-components/activity-goal.tsx",
        type: "registry:component",
      },
      {
        path: "example/productivity-components/calender.tsx",
        type: "registry:component",
      },
      {
        path: "example/productivity-components/metrics.tsx",
        type: "registry:component",
      },
      {
        path: "example/productivity-components/activity-goal.tsx",
        type: "registry:component",
      },
    ],
    categories: ["card", "components"],
  },

  // {
  //   name: "nextint",
  //   type: "registry:example",
  //   files: ["example/next-int/next-int.tsx"],
  // },
  // {
  //   name: "nextint-nav",
  //   type: "registry:example",
  //   files: ["example/next-int/navbar.tsx"],
  // },
  // {
  //   name: "nextint-lang-switch",
  //   type: "registry:example",
  //   files: ["example/next-int/lang-switch.tsx"],
  // },
  // {
  //   name: "nextint-photos",
  //   type: "registry:example",
  //   files: ["example/next-int/photos.tsx"],
  // },
];
