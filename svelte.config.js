import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import { readdirSync } from 'fs';

const aliases = readdirSync('src').reduce((acc, dir) => {
	acc[`$${dir}`] = `./src/${dir}`;
	return acc;
}, {});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			precompress: true
		}),
		alias: aliases
	}
};

export default config;
