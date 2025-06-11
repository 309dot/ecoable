import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        // Figma exact colors
        'figma-primary-blue': '#1a3a6f',
        'figma-primary-green': '#399084',
        'figma-overlay-green': '#3c836c',
        'figma-text-dark': '#14151a',
        'figma-text-secondary': '#0f1324',
        'figma-border': '#dee0e3',
        'figma-bg-overlay': '#0a0f29',
      },
      backgroundImage: {
        'figma-gradient': 'linear-gradient(to right, #1a3a6f, #399084)',
      },
      backdropBlur: {
        'figma': '10px',
      },
    },
  },
  plugins: [],
};

export default config; 