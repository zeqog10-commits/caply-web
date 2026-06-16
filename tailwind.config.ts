import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "Bricolage Grotesque" comme dans la maquette Figma, SF Pro en fallback système
        sans: ["var(--font-bricolage)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "sans-serif"],
      },
      colors: {
        ink: "#000000",
        mute: "#9CA3AF", // gray-400 — le gris "contexte"
        card: "#F4F4F5", // zinc-100 — les cartes
      },
      borderRadius: {
        pill: "71px",
      },
      boxShadow: {
        // ombre flottante douce, façon Tekiyo (reprise de tes shadow-[...] Figma)
        float:
          "0px 2px 5px rgba(0,0,0,0.10), 0px 10px 10px rgba(0,0,0,0.09), 0px 22px 13px rgba(0,0,0,0.05), 0px 40px 16px rgba(0,0,0,0.01)",
        card:
          "0px 6px 14px rgba(0,0,0,0.05), 0px 24px 24px rgba(0,0,0,0.04), 0px 55px 33px rgba(0,0,0,0.03), 0px 97px 39px rgba(0,0,0,0.01)",
      },
    },
  },
  plugins: [],
};

export default config;
