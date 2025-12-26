/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "rgb(216 167 177)", // de tu wix: --bg:216,167,177 :contentReference[oaicite:2]{index=2}
        },
      },
    },
  },
  plugins: [],
};
