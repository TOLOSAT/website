<script lang="ts">
	import PostCard from '$components/molecules/post-card/post-card.svelte'
	import { onMount } from 'svelte'
	import CircleArrowUpRight from '~icons/tabler/circle-arrow-up-right'

	let muted = true
	let videoElement: HTMLVideoElement | null

	onMount(() => {
		videoElement = document.querySelector('video')
	})

	function toggleVideo() {
		if (!videoElement) {
			return
		}

		if (videoElement.paused) {
			videoElement.play()
		} else {
			videoElement.pause()
		}
	}
</script>

<section>
	<div>
		<h1>TOLOSAT, the 3U CubeSat student only project from Toulouse</h1>
		<h2 class="subtitle">
			Join us in our mission to design, build, and launch a nanosatellite.
			Explore space technology and gain hands-on experience in aerospace
			engineering.
		</h2>
	</div>
	<video autoplay loop {muted}>
		<source src="/videos/tolosat-banner.mp4" />
		<track kind="captions" srclang="en" label="English" />
		Your browser does not support the video tag.
	</video>
	<button on:click={() => (muted = !muted)}> Mute/Unmute </button>
	<button on:click={toggleVideo}> Pause/Resume</button>
</section>

<section class="news-section">
	<div class="news-header">
		<h2>Featured News</h2>
		<a href="/">
			More TOLOSAT News
			<CircleArrowUpRight
				width="1.5rem"
				height="1.5rem"
				color="var(--primary)"
			/></a
		>
	</div>
	<div class="news-content">
		<PostCard />
		<PostCard />
		<PostCard />
	</div>
</section>

<section>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit tempora
	dolores eveniet deserunt animi impedit consequuntur incidunt illum. Temporibus
	laborum eum numquam necessitatibus corrupti quod cupiditate sint, earum
	asperiores dignissimos perspiciatis iste blanditiis obcaecati nesciunt nam
	porro recusandae! A tenetur fuga accusamus quaerat aut vitae porro ipsa
	consectetur esse, ut nobis deserunt itaque necessitatibus minima reiciendis
	repellat iusto! Inventore rem possimus incidunt facere deserunt atque
	explicabo praesentium accusantium quos velit beatae, dignissimos id quod
	deleniti omnis quam, minima unde voluptatum laborum veritatis dolores
	provident. Ducimus laboriosam eveniet tenetur id animi, excepturi eum neque
	earum, corporis, impedit dolore maiores aliquam!
</section>

<style>
	section {
		margin-block: 2rem;
	}

	video {
		margin-inline: -1.5rem;
		border-radius: 0.75rem;
		width: calc(100% + 3rem);
	}

	.subtitle {
		font-weight: 500;
		font-size: 1.25rem;
	}

	/* Featured News */
	.news-section {
		display: flex;
		flex-direction: column;
	}
	.news-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.news-header a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: inherit;
		text-decoration: none;
	}

	.news-content {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1.5rem;
		margin-inline: -1.5rem;
		border-radius: 0.75rem;
		background: var(--secondary);
		padding: 1.5rem;
	}
</style>
