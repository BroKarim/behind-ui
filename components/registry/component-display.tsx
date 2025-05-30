import * as React from "react";
import { registryItemFileSchema } from "@/registry/schema";
import { z } from "zod";

import { highlightCode } from "@/lib/highlight-code";
import {
  getRegistryItem,
  createFileTreeForRegistryItemFiles,
} from "@/lib/registry-utils";
import { BlockViewer } from "./component-viewer";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) {
    return null;
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ]);

  return (
    <BlockViewer item={item} tree={tree} highlightedFiles={highlightedFiles} />
  );
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files) {
      return null;
    }

    return await createFileTreeForRegistryItemFiles(files);
  },
);

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      })),
    );
  },
);
