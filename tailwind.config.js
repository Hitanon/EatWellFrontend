/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./global.css"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#509505",
        gray: {
          light: "#F5F5F5",
          placeholder: "#6E6E6E",
        },
        label: "#303030",
        red: "#ED3C3C",
        orange: "#E38D0C",
        blue: "#1198D2",
      },
      fontFamily: {
        mregular: ["MullerRegular", "sans-serif"],
        mmedium: ["MullerMedium", "sans-serif"],
        mbold: ["MullerBold", "sans-serif"],
        mextrabold: ["MullerExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

