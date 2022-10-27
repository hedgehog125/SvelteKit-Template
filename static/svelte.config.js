import adapter from "@sveltejs/adapter-static";

const URL_PREFIX = "SvelteKit-Template"; // <-- Set this to the repository name if you're hosting on GitHub Pages (unless it's your homepage site), as all the URLs will need to be prefixed with it
const IS_TEST_BUILD = false; // If you want to do a test build, set this to true so the prefix doesn't get added


const dev = process.env.NODE_ENV != "production";
const baseURL = (
	dev
	|| IS_TEST_BUILD
	|| URL_PREFIX == ""
)? "" : `/${URL_PREFIX}`;
const buildDir = "build";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors	
	kit: {
		appDir: "app",
		paths: {
			base: baseURL
		},
		alias: {
			$util: "src/lib/util",
			$set: "src/lib/settings",
			$sub: "src/lib/util/subcomponents",
			$img: "src/lib/imgs",
			$snd: "src/lib/snds",
			$vid: "src/lib/vids"
		},

		prerender: {
			default: true
		},
		adapter: adapter({
			pages: buildDir,
			assets: buildDir,
			fallback: null
		})
	}
};

export default config;