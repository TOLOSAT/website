import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
    Icons({
      compiler: 'svelte',
      autoInstall: true
    }),
    sveltekit()
  ]
});
