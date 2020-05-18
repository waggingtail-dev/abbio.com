// tailwind.config.js

module.exports = {
  purge: [
    './resources/views/**/*.html',
    './resources/css/site.css'
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}