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
        'off-gray': "#AFCBD521",
        'deep-blue': "#076787",
        'dark-blue': "#110163",
        'light-blue': "#82B2C2",
        'off-white': "#FFFFFF33",
        'light-gray': "#808080",
        'light-green': "#85B6A6",
        'background': "#F8FDFF",
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
        'custom-2xl': "57px",
        'custom-3xl': "66px",
      }
    },
  },
  plugins: [],
}