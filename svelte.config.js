// see https://kit.svelte.dev/docs/adapter-static
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		trailingSlash: 'always',
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};
