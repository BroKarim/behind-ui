// utils/theme-preset-helper.ts

import { defaultPresets } from "@/lib/theme-preset";
import { ThemeStyles } from "@/types/theme";
import { defaultThemeState } from "@/config/theme";

//mengambil dan menggabungkan style dari preset tertentu dengan default style, lalu mengembalikan objek ThemeStyles (light dan dark).
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
      ...(preset.styles.dark || {}), // ✅ Ini yang benar
    },
  };
}
