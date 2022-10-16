import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		target: 'esnext',
		polyfillModulePreload: false,
		cssTarget: 'esnext'
	},
	plugins: [sveltekit()]
};

export default config;
