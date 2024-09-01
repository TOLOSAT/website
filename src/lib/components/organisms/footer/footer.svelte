<script lang="ts">
	import Mail from '~icons/tabler/mail'
	import Github from '~icons/tabler/brand-github'
	import Instagram from '~icons/tabler/brand-instagram'
	import Linkedin from '~icons/tabler/brand-linkedin'

	import * as config from '$lib/config'
</script>

<footer>
	<div>
		<ul>
			<li>
				<a href={config.mail} target="_blank">
					<Mail style="width: 1.5rem; height: 1.5rem;" />
				</a>
			</li>
			<li>
				<a href={config.instagram} target="_blank">
					<Instagram style="width: 1.5rem; height: 1.5rem;" />
				</a>
			</li>
			<li>
				<a href={config.github} target="_blank">
					<Github style="width: 1.5rem; height: 1.5rem;" />
				</a>
			</li>
			<li>
				<a href={config.linkedin} target="_blank">
					<Linkedin style="width: 1.5rem; height: 1.5rem;" />
				</a>
			</li>
		</ul>

		<p>
			Made with ❤️ using <a href="https://kit.svelte.dev/" target="_blank"
				>Sveltekit</a
			><br />
			&copy; {new Date().getFullYear()} <a href="/">Tolosat</a> —
			<em>Toulouse</em>
		</p>
	</div>
</footer>

<style>
	footer {
		background: var(--primary);
		min-height: var(--footer-mobile-height);
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-inline: auto;
		padding-inline: var(--site-padding);
		max-width: var(--site-max-width);
		min-height: inherit;
	}

	ul {
		display: flex;
		gap: 1rem;
		margin-block: 0;
		padding-left: 0;
		list-style: none;
	}

	a {
		color: inherit;
	}

	p {
		margin-block: 0;
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 2;
		text-align: center;
		text-underline-offset: 4px;
	}

	@media (min-width: 640px) {
		footer {
			min-height: var(--footer-desktop-height);
		}

		div {
			flex-direction: row;
			justify-content: space-between;
		}

		ul {
			order: 2;
		}

		p {
			text-align: left;
		}
	}
</style>
