import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "bg-img": "url('/public/Images/Flash Screen.png')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        primary1: "#FFFDE7",
        primary2: "#FFFCCF",
        primary3: "#FFFAB7",
        primary4: "#FFF99F",
        primary5: "#FFF56F",
        primary6: "#F9D916",
        primary7: "#F6BD13",
        gray1: "#828282",
      },
    },
  },
  plugins: [],
};
export default config;
