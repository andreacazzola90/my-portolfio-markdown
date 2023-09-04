import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["ui-sans-serif"],
        serif: ["ui-serif"],
        mono: ["ui-monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#65c3c8",
          secondary: "#ef9fbc",
          accent: "#eeaf3a",
          neutral: "#291334",
          "base-100": "#faf7f5",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
export default config;
