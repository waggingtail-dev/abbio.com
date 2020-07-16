// tailwind.config.js

module.exports = {
  purge: {
    content: [
      './resources/js/**/*.vue',
      './resources/views/**/*.html',
      './resources/views/*.html'
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#FEF9E8',
          200: '#FEF0C5',
          300: '#FDE7A1',
          400: '#FBD65B',
          500: '#F9C415',
          600: '#E0B013',
          700: '#95760D',
          800: '#705809',
          900: '#4B3B06',
        },
        'secondary': {
          100: '#E9EAEC',
          200: '#C7CAD0',
          300: '#A5AAB4',
          400: '#626B7C',
          500: '#1F2B44',
          600: '#1C273D',
          700: '#131A29',
          800: '#0E131F',
          900: '#090D14',
          },
      }
    },
    typography: {
      default: {
        css: {
          ul: {
            li: {
              '&:before': {
                backgroundColor: '#000000',
              },
            }
          },
          color: '#1a202c',
          a: {
            color: '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ]
}