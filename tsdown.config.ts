import { writeFile } from 'node:fs/promises'
import { defineConfig } from 'tsdown'

const entry = ['ts/index.ts']

// Four outputs. The two `dist/` bundles keep the exact filenames the README's
// badgesize links and any `<script src>` consumer already point at; `esm/` and
// `cjs/` replace the old `dist-es2015/` and `dist-es5/` tsc outputs.
export default defineConfig([
	{
		entry,
		format: 'esm',
		outDir: 'esm',
		outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
		dts: true,
		sourcemap: true,
		// Mirror the source tree rather than bundling, so the ESM output keeps the
		// per-module shape tsc used to emit and stays tree-shakeable downstream.
		unbundle: true
	},
	{
		entry,
		format: 'cjs',
		outDir: 'cjs',
		outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
		dts: true,
		sourcemap: true,
		hooks: {
			// The package root is `"type": "module"`, so cjs/index.js is only read as
			// CommonJS because of this marker. tsdown's `copy` treats `to` as a
			// directory, which is why this is written rather than copied.
			'build:done': () => writeFile('cjs/package.json', '{ "type": "commonjs" }\n')
		}
	},
	{
		// Named entry plus an explicit entryFileNames: tsdown would otherwise infix
		// the format and emit color-map-rainbow.iife.es5.js, moving a published path.
		// `color-map` stays external here, as it was under webpack — the bundle reads
		// it off the `ColorMap` global.
		entry: { 'color-map-rainbow': 'ts/index.ts' },
		format: 'iife',
		globalName: 'ColorMapRainbow',
		deps: { neverBundle: ['color-map'] },
		outputOptions: {
			entryFileNames: '[name].es5.js',
			globals: { 'color-map': 'ColorMap' }
		},
		outDir: 'dist',
		target: 'es2015',
		minify: true,
		sourcemap: true
	},
	{
		// The es2015 bundle inlined `color-map` under rollup, so it stays
		// self-contained — that is the difference between the two dist files.
		// tsdown externalizes `dependencies` by default, so this has to say so.
		entry: { 'color-map-rainbow': 'ts/index.ts' },
		format: 'iife',
		globalName: 'ColorMapRainbow',
		deps: { alwaysBundle: ['color-map'] },
		outputOptions: { entryFileNames: '[name].es2015.js' },
		outDir: 'dist',
		target: 'es2015',
		minify: true,
		sourcemap: true
	}
])
