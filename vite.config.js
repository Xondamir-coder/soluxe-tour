import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
	plugins: [
		vue(),
		Sitemap({
			hostname: 'https://soluxetour.uz'
		}),
		viteCompression({ algorithm: 'brotliCompress' })
	],
	css: {
		postcss: {
			plugins: [autoprefixer]
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		target: 'es2020',
		minify: 'terser',
		cssCodeSplit: true,
		chunkSizeWarningLimit: 500,
		terserOptions: {
			compress: { drop_console: true, drop_debugger: true },
			format: { comments: false }
		}
	}
});
