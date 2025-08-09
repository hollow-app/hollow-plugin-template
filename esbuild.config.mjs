import esbuild from "esbuild";
import { argv, exit } from "process";
import { builtinModules } from "module";
import { solidPlugin } from "esbuild-plugin-solid";


const banner = `/*
Bundled with Esbuild.
For source code, please refer to the plugin's repository.
*/
`;

const isProduction = argv.includes("production");

const buildContext = await esbuild.context({
	banner: {
		js: banner,
	},
	entryPoints: ["index.ts"],
	bundle: true,
	external: ["hollow-api", ...builtinModules],
	format: "cjs",
	target: "es2022",
	logLevel: "info",
	sourcemap: isProduction ? false : "inline",
	treeShaking: true,
	outfile: "index.js",
	plugins: [solidPlugin()],
});

if (isProduction) {
	await buildContext.rebuild();
	exit(0);
} else {
	await buildContext.watch();
}
