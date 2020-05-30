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
        'bg-red-500', 'px-4', 'text-3xl', 'font-black', 'leading-none', 'text-gray-800', 'mb-6', 'text-6xl',
        'text-2xl', 'font-bold', 'text-gray-800', 'leading-tight', 'mb-2', 'font-light', 'leading-normal',
        'bg-gray-800', 'text-yellow-300', 'px-2', 'py-1', 'mt-12', 'mt-5', 'mt-0', 'flex', 'items-start', 'col-span-1', 'text-yellow-500'

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