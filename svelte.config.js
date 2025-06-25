import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$lib: "./src/lib",
		},
		adapter: adapter(),
		paths: {
			base: process.argv.includes("dev") ? "" : "/kayord.com",
		},
	},
};

export default config;
