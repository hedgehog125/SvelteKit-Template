const URL_PREFIX = "SvelteKit-Template"; // <-- Set this to the repository name if you're hosting on GitHub Pages (unless it's your homepage site), as all the URLs will need to be prefixed with it. If you don't want a prefix, set it to an empty string


import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV != "production";
const disableBaseURL = process.env.DISABLE_BASE_URL == null? false : process.env.DISABLE_BASE_URL == "true";
const baseURL = (
	dev
	|| disableBaseURL
	|| URL_PREFIX == ""
)? "" : `/${URL_PREFIX}`;

/** @type {import("@sveltejs/kit").Config} */
const config = {
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

		adapter: adapter()
	}
};

export default config;