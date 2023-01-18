/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "desktopbg": "url(/src/assets/bg-sidebar-desktop.svg)",
        "mobilebg": "url(/src/assets/bg-sidebar-mobile.svg)",
      },
      colors: {
        Marine: "hsl(213, 96%, 18%)",
        Purplish: "hsl(243, 100%, 62%)",
        Pastel: "hsl(228, 100%, 84%)",
        Light: "hsl(206, 94%, 87%)",
        Strawberry: "hsl(354, 84%, 57%)",
        
        Coolg: "hsl(231, 11%, 63%)",
        Lightg: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        poppins: ['Ubuntu', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
