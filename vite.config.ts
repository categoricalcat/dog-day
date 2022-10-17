import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],

	build: {
		target: 'esnext',
		minify: true,
		polyfillModulePreload: false,
		cssTarget: 'esnext'
	}
};

export default config;
