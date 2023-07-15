/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        abril: ["Abril Fatface", "cursive"],
      },
      colors: {
        mybg: {
          DEFAULT: "#FCFCFC",
          dark: "#222831",
          darklight: "#393E46",
          darklight2: "#3D434B",
        },
        myblack: {
          DEFAULT: "#2E2E2E",
          dark: "#222831",
          darklight: "#393E46",
          darklight2: "#3D434B",
        },
        mywhite: {
          DEFAULT: "#FCFCFC",
          dark: "#FCFCFC",
        },
        myyellow: {
          DEFAULT: "#FFD8B5",
          dark: "#fcd34d",
        },
        myyellowlight: {
          DEFAULT: "#FFE9D4",
          dark: "#fef08a",
        },
        myblue: {
          DEFAULT: "#83ADFF",
          dark: "#83ADFF",
        },
        mybluelight: {
          DEFAULT: "#D3DFF8",
          dark: "#D3DFF8",
        },
        mygreen: {
          DEFAULT: "#A3FFC2",
          dark: "#A3FFC2",
        },
        mygreenlight: {
          DEFAULT: "#DCF8E6",
          dark: "#DCF8E6",
        },
        myred: {
          DEFAULT: "#FF6262",
          dark: "#FF6262",
        },
      },
      boxShadow: {
        myshadow6: "6px 6px 0px",
        myshadow4: "4px 4px 0px",
        myshadow2: "2px 2px 0px",
        myshadow6down: "0px 6px 0px",
        myshadow4down: "0px 4px 0px",
        myshadow2down: "0px 2px 0px",
      },
      screens: {
        "3xl": "1600px",
      },
      fontSize: {
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        40: ["2.5rem", { lineHeight: "2.5rem" }],
        62: "3.875rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
