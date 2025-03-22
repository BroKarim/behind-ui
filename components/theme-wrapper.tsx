"use client";

import { cn } from "@/lib/utils";
import { useConfig } from "@/lib/use-config";
import { BaseColor } from "@/registry/registry-base-colors";
import { baseColors } from "@/registry/registry-base-colors";
import { useTheme } from "next-themes";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({ defaultTheme, children, className }: ThemeWrapperProps) {
  const [config] = useConfig();
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const activeTheme = baseColors.find((theme) => theme.name === (defaultTheme || config.theme));

  return (
    <div
      className={cn(`theme-${defaultTheme || config.theme}`, "w-full", className)}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
          ...(activeTheme
            ? {
                "--primary": activeTheme.cssVars[mode === "dark" ? "dark" : "light"].primary,
                "--primary-foreground": activeTheme.cssVars[mode === "dark" ? "dark" : "light"]["primary-foreground"],
                "--secondary": activeTheme.cssVars[mode === "dark" ? "dark" : "light"].secondary,
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
