<script lang="ts">
	let currentLanguage = 'en'

	function setLanguage(language: string) {
		console.log('Language set: ' + language)
		currentLanguage = language
	}
</script>

<div>
	<button role="switch" aria-checked="true" on:click={() => setLanguage('en')}
		>EN
	</button>
	<button role="switch" aria-checked="false" on:click={() => setLanguage('fr')}
		>FR</button
	>
</div>

<style>
	[aria-checked='true'] {
		color: var(--primary);
	}
</style>
