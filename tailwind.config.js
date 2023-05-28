/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter"],
      inknut: ["Inknut Antiqua"],
    },
  },
  plugins: [require("daisyui")],
};
