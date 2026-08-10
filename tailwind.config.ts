import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flour: "#FBF5E9",
        kraft: "#F1E4CB",
        kraftline: "#E1CFA6",
        crust: "#2B1D14",
        rye: "#6B3A22",
        ryelight: "#8B4E2E",
        honey: "#C98A2E",
        thyme: "#6E7B52",
        fade: "#8A7A63",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
