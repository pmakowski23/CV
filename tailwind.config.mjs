/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#007bff", // dark professional blue
        },
      },
      fontFamily: {
        heading: ["Source Serif 4", "ui-serif", "Georgia", "serif"],
        body: ["Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
