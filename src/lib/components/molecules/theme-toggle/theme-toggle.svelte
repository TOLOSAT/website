<script lang="ts">
	import { mode, toggleMode } from 'mode-watcher'

	import Sun from '~icons/tabler/sun'
	import Moon from '~icons/tabler/moon'
</script>

<button on:click={toggleMode}>
	{#if $mode === 'dark'}
		<Moon style="width: 1.5rem; height: 1.5rem;" />
	{:else}
		<Sun style="width: 1.5rem; height: 1.5rem;" />
	{/if}
</button>

<style>
	button {
		cursor: pointer;
		border: none;
		background: none;
	}
</style>
