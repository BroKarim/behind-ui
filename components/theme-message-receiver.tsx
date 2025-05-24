"use client";

import { useEffect } from "react";

export function ThemeMessageReceiver() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "THEME_CHANGE") {
        const { mode, styles } = event.data;

        const root = document.documentElement;
        const vars = mode === "dark" ? styles.dark : styles.light;

        Object.entries(vars).forEach(([key, value]) => {
          root.style.setProperty(`--${key}`, value as string);
        });

        if (mode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        if (vars.shadow) {
          root.style.setProperty("--shadow", vars.shadow as string);
        } else {
          root.style.removeProperty("--shadow");
        }
      }
    };

    window.addEventListener("message", handleMessage);

    window.parent.postMessage({ type: "IFRAME_READY" }, "*");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return null;
}
