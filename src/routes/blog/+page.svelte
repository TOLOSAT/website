<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()
</script>

<section>
	<h1>Blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<a href="/blog/{post.slug}">
					<div class="post-header">
						<h2>
							{post.title}
						</h2>

						<span>
							{post.date}
						</span>
					</div>

					<div class="post-content">
						<img src="/images/posts/{post.image}" alt="" />

						<p>
							{post.description}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		margin-block: 8rem 6rem;
	}

	.post-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.post-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;

		img {
			width: 100%;
		}
	}

	h1 {
		font-weight: 500;
		font-size: 3rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0;
		list-style-type: none;
	}

	a {
		color: var(--text-color);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
