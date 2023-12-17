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
        dark: '#1D242C',
        blue: '#0176C3',
        skyblue: '#CCE4F3',
        darkblue: '#0162A2',
      },
    },
  },
  plugins: [],
}
export default config
