let mix = require('laravel-mix');

mix.less('assets/css/style.less', 'assets/min');

mix.js('assets/js/index.js', 'assets/min');
