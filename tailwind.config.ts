import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      customGray: {
        textP: "#989DA4",
        loginBack: "#F8F9FB",
        label:"#6C6E72",
        inputBorder:"#EBEBEE"
      },
      customBlue: {
        borderTop: "#0763E3",
      },
      white:"#ffff",
      red: "#FF0000"
    },
  },
  plugins: [],
};
export default config;
