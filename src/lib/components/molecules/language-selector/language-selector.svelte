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
		gap: 0.25rem;
		margin-block: 0;
		border: 1px solid var(--text);
		border-radius: 0.375rem;
		padding-left: 0;
		font-size: 0.875rem;
		list-style: none;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;
	}

	[aria-current='page'] {
		color: var(--accent);
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 1.75rem;
		height: 1.75rem;
		color: inherit;
		text-decoration: none;
		text-transform: uppercase;
	}

	li:not(:last-child):after {
		content: '/';
	}
</style>
