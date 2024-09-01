<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import '../app.css'

	import { ModeWatcher } from 'mode-watcher'
	import { Header } from '$components/organisms/header'
	import { Footer } from '$components/organisms/footer'
	import { Banner } from '$components/organisms/banner'
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />

	<div class="layout">
		<Banner />
		<Header />

		<main>
			<slot />
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
