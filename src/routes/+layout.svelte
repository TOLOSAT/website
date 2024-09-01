<script lang="ts">
	import '../app.css'

	import { ModeWatcher } from 'mode-watcher'
	import { Header } from '$components/organisms/header'
	import { Footer } from '$components/organisms/footer'
	import { Banner } from '$components/organisms/banner'
</script>

<ModeWatcher />

<div class="layout">
	<Banner />
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		padding-inline: var(--site-padding);
		max-width: var(--site-max-width);
	}
</style>
