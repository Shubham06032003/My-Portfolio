import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#f8fafc",
        cyan: {
          DEFAULT: "#22d3ee",
          500: "#06b6d4"
        },
        emerald: {
          DEFAULT: "#34d399",
          500: "#10b981"
        }
      },
      fontFamily: {
        space: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;
