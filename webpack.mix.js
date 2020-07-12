const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// original file content
// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

// from: https://medium.com/@lalrinfela/laravel-with-quasar-spa-7b298024f106
mix
  .copy('spa/index.html', 'resources/views/app.blade.php')
  .copyDirectory('spa', 'public');
  