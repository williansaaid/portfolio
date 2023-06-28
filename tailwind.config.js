const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#58E6D9", // 240,86,199
        primaryDark: "#F0EB8D", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 10s linear infinite"
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba( 0, 0, 0, 0.4 ) 2px, #f5f5f5 8px, #f5f5f5 100px)",
        circularDark: "repeating-radial-gradient(rgba( 245, 245, 245, 0.7 ) 2px, #1b1b1b 8px, #1b1b1b 100px)",
        circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        circularDarkLg:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
      },
      screens: {
        "2xl": "1535px",
        "xl": "1279px",
        "lg": "1023px" ,
        "md": "767px",
        "sm": "639px",
        "xs": "479px"
      }
    }
  },
  plugins: [],
}
