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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#094546',
        secondary: '#e25822',
        customOrange: '#ff914c opacity-50'
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   theme: {
//     colors: {
//       primary: '#5c6ac4',
//       secondary: '#ecc94b',
//       // ...
//     }
//   }
// }
export default config;