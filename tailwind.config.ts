import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#020817',
        foreground: '#f8fafc',
        accent: '#7c3aed',
        secondary: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
