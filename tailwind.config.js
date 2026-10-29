import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#141B34',
        muted: '#4A5270',
        chalk: '#F4F5F8',
        line: '#D8DCEA',
        imperial: { DEFAULT: '#2A3CC7', deep: '#1B2896', tint: '#E8EBFB' },
      },
      maxWidth: { page: '76rem' },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: [
      {
        imperial: {
          primary: '#2A3CC7',
          'primary-content': '#FFFFFF',
          secondary: '#141B34',
          'secondary-content': '#FFFFFF',
          accent: '#C99A2E',
          'accent-content': '#141B34',
          neutral: '#141B34',
          'neutral-content': '#FFFFFF',
          'base-100': '#FFFFFF',
          'base-200': '#F4F5F8',
          'base-300': '#D8DCEA',
          'base-content': '#141B34',
          info: '#2A3CC7',
          success: '#1F7A4D',
          warning: '#B7791F',
          error: '#B42318',
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.375rem',
          '--rounded-badge': '0.25rem',
          '--btn-focus-scale': '1',
          '--animation-btn': '0.15s',
        },
      },
    ],
  },
}
