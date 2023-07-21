/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616 0%, #FFC837 100%)",
        "mobile-home": "url()",
      }),
    },
    keyframes: {
      "type-bar-movement": {
        "0%": { width: "100%" },
        "100%": { width: "0.25rem" },
      },
      pulse: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      "type-bar-animation": "type-bar-movement 2s",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
