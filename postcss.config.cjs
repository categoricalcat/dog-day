const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');

const config = {
	plugins: [atImport(), tailwindcss(), autoprefixer]
};

module.exports = config;
