import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-(light|dark)-(primary|secondary|background|acent|text|error|transparent)/,
    },
    {
      pattern: /text-(light|dark)-(primary|secondary|background|acent|text|error|transparent)/,
    },
    {
      pattern: /group-hover:bg-(light|dark)-(primary|secondary|background|acent|text|error|transparent)/,
    },

  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        light: {
          'primary': '#5082EE',
          'secondary': '#D46779',
          'background': '#222831',
          'acent': '#C6C6C6',
          'text': '#FFFFFF',
          'error': '#F44336'
        },
        dark: {
          'primary': '#D46779',
          'secondary': '#5082EE',
          'background': '#222831',
          'acent': '#C6C6C6',
          'text': '#FFFFFF',
          'error': '#F44336'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [
    require('tailwind-merge'),
  ],
};
export default config;
