const mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('resources/js/site.js', 'public/js')

mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-preset-env')({stage: 0}),
])

if (mix.inProduction()) {
   mix.version();
   mix.purgeCss({ enabled: true });
}