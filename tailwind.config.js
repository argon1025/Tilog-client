// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "eng-sub-font-1": ["Literata", "sans-serif"],
        "eng-sub-font-2": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "bg-1": "url('./Resource/bg1.jpg')",
        "bg-2": "url('./Resource/bg2.svg')",
        "bgd-1": "url('./Resource/bgd1.jpg')",
      },
    },
  },
  variants: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
