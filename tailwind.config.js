// tailwind.config.js

module.exports = {
  purge: [
    './resources/views/**/*.html',
    './resources/views/*.html'
    
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}