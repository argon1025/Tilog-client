// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "eng-sub-font-1": ["Literata", "sans-serif"],
      },
      backgroundImage: {
        "bg-1": "url('./Resource/bg1.jpg')",
        "bg-2": "url('./Resource/bg2.svg')",
        "bgd-1": "url('./Resource/bgd1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
