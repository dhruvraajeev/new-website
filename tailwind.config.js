/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090b",
        card: "#18181b",
        edge: "#27272a",
        soft: "#f4f4f5",
        muted: "#9ca3af",
        dim: "#71717a",
        accent: "#0284c7",
        mint: "#21c45d",
      },
      fontFamily: {
        sans: ["Satoshi", "DM Sans", "system-ui", "sans-serif"],
        heading: ["DM Sans", "Satoshi", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
