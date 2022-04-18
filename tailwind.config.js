module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'patternCard': "url('/bg-pattern-card.svg')",
      },
      colors: {
        darkCyan: '#19A1AE',
        darkGrey: '#2E3349',
        lightGrey: '#6B7082',
        divider: '#E8E9EC',
      },
      dropShadow: {
        whiteBorder: ['5px 0 0 white', '0 5px 0 white', '-5px 0 0 white', '0 -5px 0 white'],
      },
    },
  },
  plugins: [],
}
