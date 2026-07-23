import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0B1C2E", 800: "#122A42", 700: "#16324A" },
        cargo: { DEFAULT: "#F26522", 600: "#DB5514" },
        fog: "#F5F7FA",
        steel: "#64748B",
        seafoam: "#DCE8F2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        ticker: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        dash: { to: { strokeDashoffset: "0" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        dash: "dash 2.4s ease-out forwards",
        fadeUp: "fadeUp .7s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
