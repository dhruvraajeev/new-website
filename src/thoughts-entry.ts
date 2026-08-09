// Entry script for standalone /thoughts/*.html pages — mounts the same
// ferrofluid background as the main app and wires the theme toggle button,
// sharing theme logic (src/lib/theme.ts) so a toggle here or on the
// homepage applies everywhere.
import { mountFerrofluid } from "./lib/ferrofluidMount";
import { getTheme, setTheme, ferrofluidPropsForTheme } from "./lib/theme";

function init() {
  const container = document.getElementById("ferrofluid-canvas");
  const btn = document.getElementById("theme-toggle");
  if (!container || !btn) return;

  let cleanup = mountFerrofluid(container, {
    speed: 0.4,
    ...ferrofluidPropsForTheme(getTheme()),
  });

  const sync = () => {
    btn.textContent = getTheme() === "dark" ? "☾" : "☀";
  };

  btn.addEventListener("click", () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    sync();
    cleanup();
    cleanup = mountFerrofluid(container, { speed: 0.4, ...ferrofluidPropsForTheme(next) });
  });

  sync();
}

init();
