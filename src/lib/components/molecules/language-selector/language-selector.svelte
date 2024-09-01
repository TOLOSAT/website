<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js'
	import { i18n } from '$lib/i18n.js'
	import { page } from '$app/stores'
</script>

<nav aria-label="Languages">
	<ul>
		{#each availableLanguageTags as lang}
			<li>
				<a
					href={i18n.route($page.url.pathname)}
					hreflang={lang}
					aria-current={lang === languageTag() ? 'page' : undefined}
					aria-label={lang}
				>
					{lang}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		margin-left: 0;
		list-style: none;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--text);
		border-right-color: transparent;
		background: var(--accent);
		width: 2rem;
		height: 2rem;
		color: inherit;
		text-decoration: none;
		text-transform: uppercase;
	}

	li:first-child a {
		border-top-left-radius: 0.375rem;
		border-bottom-left-radius: 0.375rem;
	}

	li:last-child a {
		border-right-color: var(--text);
		border-top-right-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
	}

	[aria-current='page'] {
		color: var(--primary);
	}
</style>
