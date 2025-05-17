// app/view/styles/[style]/[name]/ClientBlockPage.tsx
"use client";

import { useEditorStore } from "@/store/editor-store";
import { useTheme } from "@/components/theme-provider";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { getRegistryItem, getRegistryComponent } from "@/lib/registry-utils";

export default function ClientBlockPage({ name, style }: { name: string; style: string }) {
  const themeState = useEditorStore((s) => s.themeState);
  const mode = useTheme().theme;
  const Component = getRegistryComponent(name, style); // bisa juga dipassing dari parent jika tidak bisa resolve client-side

  if (!Component) return null;

  return (
    <ThemeWrapper>
      <Component />
    </ThemeWrapper>
  );
}
