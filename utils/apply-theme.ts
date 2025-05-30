import { ThemeEditorState } from "@/types/editor";
import { ThemeStyleProps, ThemeStyles } from "@/types/theme";
import { colorFormatter } from "./color-converter";
import { setShadowVariables } from "./shadow";
import { applyStyleToElement } from "./apply-style-to-elements";
import { COMMON_STYLES } from "@/config/theme";

type Theme = "dark" | "light";

const COMMON_NON_COLOR_KEYS = COMMON_STYLES;

const updateThemeClass = (root: HTMLElement, mode: Theme) => {
  if (mode === "light") {
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
  }
};

const applyCommonStyles = (root: HTMLElement, themeStyles: ThemeStyleProps) => {
  Object.entries(themeStyles)
    .filter(([key]) =>
      COMMON_NON_COLOR_KEYS.includes(
        key as (typeof COMMON_NON_COLOR_KEYS)[number],
      ),
    )
    .forEach(([key, value]) => {
      if (typeof value === "string") {
        applyStyleToElement(root, key, value);
      }
    });
};

const applyThemeColors = (
  root: HTMLElement,
  themeStyles: ThemeStyles,
  mode: Theme,
) => {
  Object.entries(themeStyles[mode]).forEach(([key, value]) => {
    if (
      typeof value === "string" &&
      !COMMON_NON_COLOR_KEYS.includes(
        key as (typeof COMMON_NON_COLOR_KEYS)[number],
      )
    ) {
      const hslValue = colorFormatter(value, "hsl", "4");
      applyStyleToElement(root, key, hslValue);
    }
  });
};

export const applyThemeToElement = (themeState: ThemeEditorState, rootElement: HTMLElement) => {
  const { currentMode: mode, styles: themeStyles } = themeState;

  if (!rootElement) return;

  updateThemeClass(rootElement, mode);
 
  applyCommonStyles(rootElement, themeStyles.light);

  applyThemeColors(rootElement, themeStyles, mode);

  setShadowVariables(themeState);
};
