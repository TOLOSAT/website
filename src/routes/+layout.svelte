<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import '../app.css'

	import { ModeWatcher } from 'mode-watcher'
	import { Header } from '$components/organisms/header'
	import { Footer } from '$components/organisms/footer'
	import { Banner } from '$components/organisms/banner'

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />

	<div class="layout">
		<Banner />
		<Header />

		<main>
			{@render children?.()}
		</main>

		<Footer />
	</div>
</ParaglideJS>

<style>
	.layout {
		display: flex;
		flex-direction: column;
	}

	main {
		margin-inline: auto;
		padding-inline: var(--site-padding);
		max-width: var(--site-max-width);
	}
</style>
