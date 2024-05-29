import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#533ABA',
        brightPurple: '#7300FE',
        orange: '#FFB252',
        peach: '#FFDBB9',
        redError: '#D6293E',
        greenSuccess: '#9BDA4B',
        white: '#FFF8FF',
        black: '#0E0E0E',
        gray: {
          '100': '#E5E5E5',
          '300': '#B4B4B4',
          '500': '#383838',
          '700': '#252525',
          '900': '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
}
export default config
