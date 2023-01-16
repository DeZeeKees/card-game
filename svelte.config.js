import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()])
};

export default config;
