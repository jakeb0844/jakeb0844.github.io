/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // flowbite-svelte default primary (kept for compatibility)
        primary: {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
        // WoW-themed palette
        wow: {
          navy: "#0B1E3A",
          teal: "#103C52",
          gold: "#C9A66B",
          lightgold: "#E1C699",
          copper: "#8C5E3C",
          red: "#D9534F",
          green: "#5EB160",
          parchment: "#F5F1E6",
          offwhite: "#F5F5F5",
        },
      },
      boxShadow: {
        "glow-red":
          "0 0 0 2px rgba(217,83,79,0.35), 0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.3)",
        "glow-green":
          "0 0 0 2px rgba(94,177,96,0.35), 0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "parchment-texture":
          "radial-gradient(ellipse at center, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.05) 100%)",
      },
    },
  },
};
