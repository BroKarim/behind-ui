(function () {
  window.addEventListener("message", (event: MessageEvent) => {
    if (!event.data || event.data.type !== "theme-update") return;

    // Set CSS variables untuk radius
    document.documentElement.style.setProperty("--radius", `${event.data.radius}rem`);

    // Ubah kelas tema pada body
    document.body.className = document.body.className.replace(/theme-\w+/, `theme-${event.data.theme}`);

    // Handle mode (light/dark)
    if (event.data.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
})();
    