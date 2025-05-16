"use client";

import { useEffect, useRef } from "react";
import { fontSans, fontMono, fontRoboto, fontSerif } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useConfig } from "@/lib/use-config";
import { useEditorStore } from "@/store/editor-store";
import { useTheme } from "next-themes";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {}

//Context buatan sendiri (ThemeProviderContext) untuk mengatur dan toggle mode tema serta menerapkan theme ke document.documentElement
export function ThemeWrapper({ children, className }: ThemeWrapperProps) {
  const [config] = useConfig();
  const { theme: mode } = useTheme();
  console.log("🚀 ~ ThemeWrapper ~ mode:", mode);
  const themeStyles = useEditorStore((state) => state.themeState.styles);
  console.log("🚀 ~ ThemeWrapper ~ themeStyles:", themeStyles);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!wrapperRef.current) return;

      const styles = getComputedStyle(wrapperRef.current);
      console.log("Background var:", styles.getPropertyValue("--font-sans"));
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const lightVars = themeStyles?.light;
    const darkVars = themeStyles?.dark;

    if (!lightVars || !darkVars || !mode) return; // <-- tambahan pengecekan mode

    const root = document.documentElement;
    const isDark = mode === "dark";
    const vars = isDark ? darkVars : lightVars;

    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [themeStyles, mode]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "w-full",
        className,
        config.font === "roboto" ? fontRoboto.className : config.font === "mono" ? fontMono.className : config.font === "serif" ? fontSerif.className : fontSans.className // default
      )}
      style={
        {
          "--radius": `${config.radius}rem`,
          ...(themeStyles ?? {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
