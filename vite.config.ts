import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import pkg from './package.json';
const dependencies = [
	...Object.keys(pkg.dependencies),
	...Object.keys(pkg.devDependencies)
];

const config: UserConfig = {
	plugins: [sveltekit()],

	build: {
		target: 'esnext',
		minify: true,
		polyfillModulePreload: false,
		cssTarget: 'esnext',
		rollupOptions: {
			output: {
				manualChunks(id) {
					const name = dependencies.find((dep) => id.includes(dep));

					if (name) {
						return name;
					}
				}
			}
		}
	}
};

export default config;
