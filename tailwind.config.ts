import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screen: {
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        tertiary: "rgba(var(--tertiary), <alpha-value>)",
        darkBlue: "rgba(var(--darkBlue), <alpha-value>)",
      },
      boxShadow: {
        default: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
export default config;
