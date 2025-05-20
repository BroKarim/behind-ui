"use client";

import { useEffect } from "react";

export function ThemeMessageReceiver() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "THEME_CHANGE") {
        const { mode, styles } = event.data;

        // Update tema di iframe
        const root = document.documentElement;
        const vars = mode === "dark" ? styles.dark : styles.light;

        // Update variabel CSS
        Object.entries(vars).forEach(([key, value]) => {
          root.style.setProperty(`--${key}`, value as string);
        });

        // Tambahkan kelas tema jika diperlukan
        if (mode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        // Hapus atau set ulang properti shadow
        if (vars.shadow) {
          root.style.setProperty("--shadow", vars.shadow as string);
        } else {
          root.style.removeProperty("--shadow");
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Beri tahu parent window bahwa iframe siap menerima pesan
    window.parent.postMessage({ type: "IFRAME_READY" }, "*");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return null;
}
