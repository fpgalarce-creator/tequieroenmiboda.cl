import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#090909",
        foreground: "#f5f3ef",
        gold: {
          DEFAULT: "#C8A86B",
          soft: "#E1CFA8",
          deep: "#8F6D31"
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"]
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 15% 20%, rgba(200,168,107,0.28), transparent 35%), radial-gradient(circle at 85% 10%, rgba(255,255,255,0.15), transparent 30%), linear-gradient(145deg, #0a0a0a 0%, #151515 55%, #090909 100%)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200,168,107,0.35), 0 18px 48px rgba(0,0,0,0.45)"
      }
    }
  },
  plugins: []
};

export default config;
