<script lang="ts">
	import LanguageSelector from '$components/molecules/language-selector/language-selector.svelte'
	import ThemeToggle from '$components/molecules/theme-toggle/theme-toggle.svelte'
</script>

<header>
	<nav>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/cubesat">The Cubesat</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>

		<a class="logo" href="/">
			<img src="/images/tolosat-icon.png" alt="Tolosat logo" />
		</a>

		<div class="settings">
			<!-- <input type="search" placeholder="Search..." /> -->
			<LanguageSelector />
			<ThemeToggle />
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1000;
		background: var(--primary);
		min-height: var(--header-height);
	}

	nav {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		margin-inline: auto;
		padding-inline: var(--site-padding);
		max-width: var(--site-max-width);
		min-height: inherit;
	}

	ul {
		display: flex;
		gap: 1.5rem;
		padding-left: 0;
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 3.5rem;
		height: 3.5rem;
	}

	.settings {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1.5rem;
	}

	/* input {
		border: 1px solid var(--foreground);
		border-radius: 0.25rem;
		background-color: var(--background);
		height: 1.5rem;
		color: var(--foreground);
		font-family: var(--font);
	} */

	::placeholder {
		opacity: 1; /* Firefox */
		color: var(--foreground);
	}
</style>
