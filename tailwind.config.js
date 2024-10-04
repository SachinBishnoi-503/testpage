/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Messiri': "'El Messiri', sans-serif",
        'Lato': "'Lato', sans-serif",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1188px",
        },
      },
      colors: {
        "dark-blue": "#1B3353",
        "gray": "#4D4D4D",
        "blue-gray": "#5F7086",
        "sky-blue": "#2BA8E0",
        "soft-blue": "#EEFAFF",
        // 'off-gray': "#AFCBD521",
        // 'deep-blue': "#076787",
        // 'dark-blue': "#110163",
        // 'light-blue': "#82B2C2",
        // 'off-white': "#FFFFFF33",
        // 'light-gray': "#808080",
        // 'light-green': "#85B6A6",
        // 'background': "#F8FDFF",
      },
      fontSize: {
        'custom-lg': "32px",
        'custom-xl': "40px",
        'custom-2xl': "52px",
        'custom-3xl': "60px",
        'media-lg': "28px",
      },
      lineHeight: {
        'custom-sm': "32px",
        'custom-lg': "36px",
        'custom-xl': "44px",
        "custom-2xl": "48px",
        'custom-3xl': "57px",
        'custom-4xl': "66px",
      },
      dropShadow: {
        '3xl': "2px 2px 0px black",
        '4xl': "2px 2px 0px #076787",
      },
      boxShadow: {
      '3xl': "0px 14px 30.5px 0px #1B33531F",
      '4xl': " 0px 0px 49px 7px #00000017",
      '5xl': "0px 13px 18px 0px #0000000F",
      '6xl': "0px 4px 15px 0px #81488E26",
    },

  },
},
  plugins: [],
}