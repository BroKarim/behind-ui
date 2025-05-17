"use client";

import { createContext, useContext, useEffect } from "react";
import { useEditorStore } from "@/store/editor-store";
import { applyThemeToElement } from "@/utils/apply-theme";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type Coords = { x: number; y: number };

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: (coords?: Coords) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, defaultTheme = "light", ...props }: ThemeProviderProps) {
  const { themeState, setThemeState } = useEditorStore();

  // Initialize theme when component mounts
  useEffect(() => {
    // Only set if currentMode is not already set
    if (!themeState.currentMode) {
      setThemeState({
        ...themeState,
        currentMode: defaultTheme,
      });
    }

    // Apply initial theme
    const root = document.documentElement;
    if (root) {
      applyThemeToElement({ ...themeState, currentMode: themeState.currentMode || defaultTheme }, root);
    }
  }, []);

  // Re-apply theme whenever themeState changes
  useEffect(() => {
    if (!themeState.currentMode) return;

    const root = document.documentElement;
    if (!root) return;

    applyThemeToElement(themeState, root);

    // Debug
    console.log("Theme applied:", themeState.currentMode, root.classList.contains("dark"));
  }, [themeState.currentMode]);

  const handleThemeChange = (newMode: Theme) => {
    console.log("Setting theme to:", newMode);
    setThemeState({ ...themeState, currentMode: newMode });
  };

  const handleThemeToggle = (coords?: Coords) => {
    const newMode = themeState.currentMode === "light" ? "dark" : "light";
    console.log("Toggling theme from", themeState.currentMode, "to", newMode);

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Apply view transitions if supported
    if (typeof document !== "undefined" && "startViewTransition" in document && !prefersReducedMotion) {
      if (coords) {
        document.documentElement.style.setProperty("--x", `${coords.x}px`);
        document.documentElement.style.setProperty("--y", `${coords.y}px`);
      }

      // @ts-ignore - TypeScript doesn't know about startViewTransition yet
      document.startViewTransition(() => {
        handleThemeChange(newMode);
      });
    } else {
      handleThemeChange(newMode);
    }
  };

  const value: ThemeProviderState = {
    theme: themeState.currentMode || defaultTheme,
    setTheme: handleThemeChange,
    toggleTheme: handleThemeToggle,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
