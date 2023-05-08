/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      colorwhite: "0px 5px 30px rgba(0, 0, 0, 0.1)",
      colorblack: "0px 5px 30px #A445ED",
    },

    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      lora: ['"Lora"', "serif"],
      mono: ['"Inconsolata"', "monospace"],
    },
  },
  plugins: [],
};
