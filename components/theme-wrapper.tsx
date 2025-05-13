"use client";

import { fontSans, fontMono, fontRoboto, fontSerif } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useConfig } from "@/lib/use-config";
import { BaseColor } from "@/registry/registry-base-colors";
import { baseColors } from "@/registry/registry-base-colors";
import { useTheme } from "next-themes";
import { useEditorStore } from "@/store/editor-store";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({ defaultTheme, children, className }: ThemeWrapperProps) {
  const [config] = useConfig();
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const activeTheme = baseColors.find((theme) => theme.name === (defaultTheme || config.theme));
  const themeStyles = useEditorStore((state) => state.themeState.styles);

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        "w-full",
        className,
        config.font === "roboto" ? fontRoboto.className : config.font === "mono" ? fontMono.className : config.font === "serif" ? fontSerif.className : fontSans.className // default
      )}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
          ...(themeStyles
            ? themeStyles
            : activeTheme
              ? {
                  "--primary": activeTheme.cssVars[mode === "dark" ? "dark" : "light"].primary,
                  "--primary-foreground": activeTheme.cssVars[mode === "dark" ? "dark" : "light"]["primary-foreground"],
                  "--secondary": activeTheme.cssVars[mode === "dark" ? "dark" : "light"].secondary,
                  "--accent-from": activeTheme?.cssVars?.[mode === "dark" ? "dark" : "light"]?.primary ?? "#818cf8", // fallback indigo-400
                  "--accent-to": activeTheme?.cssVars?.[mode === "dark" ? "dark" : "light"]?.["primary-foreground"] ?? "#6366f1", // fallback indigo-500
                  // Add all other color variables here
                }
              : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
