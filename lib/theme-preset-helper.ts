import { defaultThemeState } from "@/config/theme-tweakcn";
import { ThemeStyles } from "@/types/theme-tweakcn";

//Mengubah objek warna tema (mis. background, foreground, dst.) menjadi CSS variable format (mis. --background: #fff;)
export function themeColorsToCssVariables(colors: Record<string, string>): Record<string, string> {
  const cssVars = colors
    ? Object.fromEntries(
        Object.entries(colors).map(([name, value]) => {
          if (value === undefined) return [];
          const cssName = themeColorNameToCssVariable(name);
          return [cssName, value];
        })
      )
    : {};

  return cssVars;
}

export function themeColorNameToCssVariable(name: string) {
  return `--${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`;
}
