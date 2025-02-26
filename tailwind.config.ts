import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: '#AA2309', // Main brand color
        primaryLight: '#FF6B4A', // Lighter accent
        primaryDark: '#D43A1F', // Darker shade for hover states

        // Neutral Colors
        dark: '#2C2C2C', // Primary text
        gray: '#5C5C5C', // Secondary text or borders
        light: '#F5F5F5', // Backgrounds or cards
        softPink: '#FFD1C7', // Subtle backgrounds or UI elements

        // Accent Colors
        accentYellow: '#FFC107', // Call-to-action buttons
        accentGreen: '#4CAF50', // Success messages or healthy food categories
      },
    },
  },
  plugins: [],
} satisfies Config;
