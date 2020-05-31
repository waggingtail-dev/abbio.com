// tailwind.config.js

module.exports = {
  purge: {
    content: [
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
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}