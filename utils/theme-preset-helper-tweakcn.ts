// utils/theme-preset-helper.ts

import { defaultPresets } from "@/lib/theme-preset-tweakcn";
import { ThemeStyles } from "@/types/theme-tweakcn";
import { defaultThemeState } from "@/config/theme-tweakcn";

export function getPresetThemeStyles(name: string): ThemeStyles {
  const defaultTheme = defaultThemeState.styles;
  if (name === "default") {
    return defaultTheme;
  }
  const preset = defaultPresets[name];
  if (!preset) {
    throw new Error(`Preset not found for theme: ${name}`);
  }
  return {
    light: {
      ...defaultTheme.light,
      ...(preset.styles.light || {}),
    },
    dark: {
      ...defaultTheme.dark,
      ...(preset.styles.light || {}),
      ...(preset.styles.dark || {}),
    },
  };
}
