<script lang="ts">
	import PostCard from '$components/molecules/post-card/post-card.svelte'
	import { onMount } from 'svelte'

	import Journey from '$components/molecules/journey.svelte'

	import CircleArrowUpRight from '~icons/tabler/circle-arrow-up-right'
	import Pause from '~icons/tabler/pause'
	import Play from '~icons/tabler/play'
	import Volume from '~icons/tabler/volume'
	import VolumeOff from '~icons/tabler/volume-off'

	let muted = $state(true)
	let paused = $state(false)
	let videoElement: HTMLVideoElement | null

	onMount(() => {
		videoElement = document.querySelector('video')
	})

	function toggleVideo() {
		if (!videoElement) {
			return
		}

		if (paused) {
			videoElement.play()
			paused = false
		} else {
			videoElement.pause()
			paused = true
		}
	}
</script>

<section>
	<div>
		<h2>TOLOSAT, the 3U CubeSat student only project from Toulouse</h2>
		<h2 class="subtitle">
			Join us in our mission to design, build, and launch a nanosatellite.
			Explore space technology and gain hands-on experience in aerospace
			engineering.
		</h2>
	</div>
	<div class="video-container">
		<video autoplay loop {muted}>
			<source src="/videos/tolosat-banner.mp4" />
			<track kind="captions" srclang="en" label="English" />
			Your browser does not support the video tag.
		</video>
		<button class="mute-button" onclick={() => (muted = !muted)}>
			{#if muted}
				<VolumeOff width="1.5rem" height="1.5rem" />
			{:else}
				<Volume width="1.5rem" height="1.5rem" />
			{/if}
		</button>
		<button class="pause-button" onclick={toggleVideo}>
			{#if paused}
				<Play width="1.5rem" height="1.5rem" />
			{:else}
				<Pause width="1.5rem" height="1.5rem" />
			{/if}
		</button>
	</div>
</section>

<section class="introduction-section">
	<h1>Tolosat</h1>
	<p>A student association to explore space cubesat by making one</p>

	<div class="truc">
		<div>+10 years</div>
		<div>1000 students</div>
		<div>Phase C</div>
		<div>Sponsors</div>
	</div>

	<h2>Road Map</h2>
	<Journey />
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
			/>
		</a>
	</div>
	<div class="news-content">
		<PostCard />
		<PostCard />
		<PostCard />
	</div>
</section>

<section>
	<h1>Our sponsors</h1>
	<p>
		We are grateful for the support of our sponsors. They help us make our
		dreams come true.
	</p>

	<ul class="sponsors">
		<li>
			<a href="https://www.cnes.fr/en">
				<img src="/images/cnes-logo.png" alt="CNES" />
			</a>
		</li>
		<li>
			<a href="https://www.isae-supaero.fr/en/">
				<img src="/images/isae-logo.png" alt="ISAE-SUPAERO" />
			</a>
		</li>
	</ul>
</section>

<style>
	section {
		margin-block: 2rem;
	}

	.introduction-section {
		.truc {
			display: flex;
			justify-content: space-between;

			div {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-block: 1.5rem;
				border-radius: 0.75rem;
				background: var(--secondary);
				padding: 1.5rem;
				font-weight: 500;
				font-size: 1.5rem;
			}
		}
	}

	.video-container {
		position: relative;
	}

	video {
		margin-inline: -1.5rem;
		border-radius: 0.75rem;
		width: calc(100% + 3rem);
	}

	.video-container button {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border: none;
		border-radius: 50%;
		background: var(--background);
		padding: 0.5rem 0.5rem;
		color: var(--text);
	}

	.mute-button {
		right: 3.5rem;
		bottom: 1.5rem;
	}

	.pause-button {
		right: 0;
		bottom: 1.5rem;
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

	.sponsors {
		display: flex;
		gap: 1.5rem;
		padding-left: 0;
		list-style: none;
	}

	img {
		aspect-ratio: initial;
		width: 8rem;
	}
</style>
