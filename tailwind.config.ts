import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-delivered': '#EBF9F1',
        'bg-process': '#FEF2E5',
        'bg-canceled': '#FBE7E8',
        'light-bg': '#E0E0E0',
        'light-text': '#000000',
        'dark-bg': '#1D1E42',
        'dark-bg-row': '#26264F',
        'dark-text': '#FFFFFF',
        'purple-primary': '#624DE3',
        'dark-pagination-secondary': '#141432',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        skin: {
          base: "rgb(var(--foreground-rgb))",
        },
      },
      backgroundColor: {
        skin: {
          base: "rgb(var(--background-start-rgb))",
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};

export default config;
