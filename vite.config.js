import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

const config = defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			
		}
	}
});

export default config;
