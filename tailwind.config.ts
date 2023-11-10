import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(282, 63%, 15%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        180: '32rem',
      },
      keyframes: {
        arrow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        'arrow' : 'arrow 1s 0.1s ease-in infinite',
        'arrow1' : 'arrow 1s 0.3s ease-in infinite',
        'arrow2' : 'arrow 1s 0.6s ease-in infinite',
      },
    },
  },
  plugins: [],
}
export default config
