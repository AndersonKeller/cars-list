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
        "blue-50": "#007bff",
        "blue-100": "#332dee",
        "blue-200": "#1b16a1",
        "blue-300": "#0d00bd",
      },
    },
  },
  plugins: [],
};
export default config;
