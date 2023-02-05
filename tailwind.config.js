/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/*.tsx',
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      'navbar-header': ["poppins"],
      'navbar-link': ["poppins"]
    },
    extend: {
      animation: {
        type: 'type 2.7s ease-in-out 0.8s 2 alternate both',
        blink: 'blink 0.3s linear 0s infinite alternate both'
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0%)' },
          '5%, 10%': { transform: 'translateX(11%)' },
          '15%, 20%': { transform: 'translateX(21%)' },
          '25%, 30%': { transform: 'translateX(31%)' },
          '35%, 40%': { transform: 'translateX(41%)' },
          '45%, 50%': { transform: 'translateX(51%)' },
          '55%, 60%': { transform: 'translateX(61%)' },
          '65%, 70%': { transform: 'translateX(71%)' },
          '75%, 80%': { transform: 'translateX(81%)' },
          '85%, 90%': { transform: 'translateX(91%)' },
          '95%, 100%': { transform: 'translateX(100%)' },
        },
          // type: {
          //   '0%': { width: "0%", height: '100%' },
          //   '100%': { width: "100%", height: '100%' }
          // },

          blink: {
            '0%': { opacity: "0%" },
            '100%': { opacity: "100%"}
          }
      },
    },
  },
  safelist: [
    'text-sm', 'text-md', 'text-xl', 'text-2xl', 'text-4xl' // text sizes
    , 'text-red-500'
  ],
  plugins: [require("daisyui")],
}
