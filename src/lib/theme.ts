// Shared light/dark theme logic — used by the main React app and by
// standalone pages (thoughts/*.html) so the toggle is one flip that applies
// everywhere, not a separate on/off switch per page.
export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getTheme(): Theme {
  return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ferrofluidPropsForTheme(theme: Theme) {
  return theme === "dark"
    ? { colors: ["#0ea5e9", "#818cf8", "#2dd4ee"], glow: 1.1, opacity: 0.2 }
    : { colors: ["#7aa7c7", "#a5a8e0", "#8fd3e0"], glow: 0.7, opacity: 0.35 };
}

export function vignetteForTheme(theme: Theme) {
  return theme === "dark"
    ? "radial-gradient(ellipse 100% 100% at 50% 50%, rgb(var(--ink) / 0.1) 0%, rgb(var(--ink) / 0.55) 80%, rgb(var(--ink) / 0.85) 100%)"
    : "radial-gradient(ellipse 100% 100% at 50% 50%, rgb(var(--ink) / 0.35) 0%, rgb(var(--ink) / 0.85) 80%, rgb(var(--ink)) 100%)";
}
