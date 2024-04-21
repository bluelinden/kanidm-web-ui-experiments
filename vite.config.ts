import HandlebarsPrecompiler from "rollup-plugin-handlebars-precompiler";
import inject from "@rollup/plugin-inject";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		HandlebarsPrecompiler({}),
		inject({
			htmx: "htmx.org",
			Alpine: "alpinejs"
		}),
	],
});
