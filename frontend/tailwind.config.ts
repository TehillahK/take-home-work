import { type Config } from "tailwindcss";


import fs from "node:fs";
import path from "node:path";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), 
    ],
  daisyui: {
    styled: true,
    themes: ['corporate','dark','fantasy','garden','bumblebee','business'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    //  darkTheme: "dark",
  },
} satisfies Config;