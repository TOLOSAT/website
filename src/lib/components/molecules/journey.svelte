<script lang="ts">
	import { createSlider, melt } from '@melt-ui/svelte'
	import Creation from '$components/molecules/creation.svelte'

	const {
		elements: { root, range, thumbs, ticks },
		states: { value },
	} = createSlider({
		defaultValue: [5],
		min: 0,
		step: 1,
		max: 10,
	})
</script>

<span use:melt={$root} class="root">
	<span class="t">
		<span use:melt={$range} class="range"></span>
	</span>

	{#each $ticks as tick}
		<span use:melt={tick} class="tick"></span>
	{/each}

	<span use:melt={$thumbs[0]} class="thumb"></span>
</span>

{#if $value[0] === 0}
	<Creation />
{:else if $value[0] === 1}
	<h3>Phase C</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab distinctio
		dolorum iure omnis quia ratione sed, soluta suscipit. Aliquid architecto eum
		illo optio praesentium qui rem repellat saepe sunt voluptate!
	</p>
{/if}

<style>
	.root {
		display: flex;
		position: relative;
		align-items: center;
		width: 100%;
		height: 20px;
	}

	.t {
		background: #020024;
		width: 100%;
		height: 3px;
	}

	.range {
		background: var(--accent);
		height: 3px;
	}

	.tick {
		border-radius: 50%;
		background: crimson;
		width: 8px;
		height: 8px;
	}

	.tick[data-bounded] {
		background: yellow;
	}

	.thumb {
		border-radius: 50%;
		background-color: green;
		width: 1.25rem;
		height: 1.25rem;
	}

	.thumb:focus {
		outline: none;
		box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.4);
	}
</style>
