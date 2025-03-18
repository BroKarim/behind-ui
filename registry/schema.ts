import { z } from "zod";

// define (enum) yg menntukan jenis item dalam regstry
export const registryItemTypeSchema = z.enum([
  "registry:lib",
  "registry:block",
  "registry:component",
  "registry:ui",
  "registry:hook",
  "registry:page",
  "registry:file",

  // Internal use only
  "registry:theme",
  "registry:example",
  "registry:style",
  "registry:internal",
]);
export const registryItemFileSchema = z.union([
  // Target is required for registry:file and registry:page
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: z.enum(["registry:file", "registry:page"]),
    target: z.string(),
  }),
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: registryItemTypeSchema,
    target: z.string().optional(),
  }),
]);

export const registryItemTailwindSchema = z.object({
  config: z.object({
    content: z.array(z.string()).optional(),
    theme: z.record(z.string(), z.any()).optional(),
    plugins: z.array(z.string()).optional(),
  }),
});

export const registryItemCssVarsSchema = z.object({
  light: z.record(z.string(), z.string()).optional(),
  dark: z.record(z.string(), z.string()).optional(),
});

// strukture item registry
export const registryEntrySchema = z.object({
  $schema: z.string().optional(),
  name: z.string(),
  type: registryItemTypeSchema,
  title: z.string().optional(),
  author: z.string().min(2).optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
  tailwind: registryItemTailwindSchema.optional(),
  cssVars: registryItemCssVarsSchema.optional(),
  meta: z.record(z.string(), z.any()).optional(),
  docs: z.string().optional(),
  categories: z.array(z.string()).optional(),
});

// export const registrySchema = z.array(registryEntrySchema);

// Struktur keseluruhan registry, yg include name dan items
export const registrySchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(registryEntrySchema),
});

export type RegistryEntry = z.infer<typeof registryEntrySchema>;

// type yg dieskport untk validasi
export type Registry = z.infer<typeof registrySchema>;

export const blockSchema = registryEntrySchema.extend({
  type: z.literal("registry:block"),
  style: z.enum(["default"]),
  component: z.any(),
  container: z
    .object({
      height: z.string().nullish(),
      className: z.string().nullish(),
    })
    .optional(),
  code: z.string(),
  highlightedCode: z.string(),
});

export type Block = z.infer<typeof blockSchema>;
