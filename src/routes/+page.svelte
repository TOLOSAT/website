<script lang="ts">
	import PostCard from '$components/molecules/post-card/post-card.svelte'

	import RouteIcon from '~icons/tabler/route'
	import SatelliteIcon from '~icons/tabler/satellite'
	import ArrowDownIcon from '~icons/tabler/arrow-down'

	import CircleArrowUpRight from '~icons/tabler/circle-arrow-up-right'
	import Pause from '~icons/tabler/pause'
	import Play from '~icons/tabler/play'
	import Volume from '~icons/tabler/volume'
	import VolumeOff from '~icons/tabler/volume-off'

	let muted = $state(true)
	let paused = $state(false)

	let videoElement: HTMLVideoElement | null

	$effect(() => {
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

	function toggleMute() {
		if (!videoElement) {
			return
		}

		muted = !muted

		videoElement.muted = muted
	}
</script>

<section class="hero-section">
	<div class="hero-content">
		<div>
			<h1>TOLOSAT, a 3U Cubesat made by students</h1>

			<h2 class="hero-subtitle">
				Join us in our mission to design, build, and launch a nanosatellite.
			</h2>

			<div class="hero-buttons">
				<button>
					Road Map <RouteIcon width="1.5rem" height="1.5rem" />
				</button>

				<button>
					Join Us <SatelliteIcon width="1.5rem" height="1.5rem" />
				</button>
			</div>
		</div>

		<div class="hero-asso">
			<a href="/">
				<img src="/images/astre.png" alt="" />
			</a>
			<a href="/">
				<img src="/images/cubesat-isae.png" alt="" />
			</a>
		</div>
	</div>

	<div class="hero-footer">
		<p>Discover more about TOLOSAT</p>
		<span class="hero-arrow">
			<ArrowDownIcon width="1.5rem" height="1.5rem" />
		</span>
	</div>
</section>

<section class="video-section">
	<h1>TOLOSAT in video</h1>

	<div class="video-container">
		<video autoplay loop muted>
			<source src="/videos/tolosat-banner.mp4" />
			<track kind="captions" srclang="en" label="English" />
			Your browser does not support the video tag.
		</video>

		<button class="mute-button" onclick={toggleMute}>
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

<section class="news-section">
	<div class="news-header">
		<h1>Our latests news</h1>
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

<section class="support-section">
	<h1>Support Tolosat ❤️</h1>
	<p>
		We are grateful for the support of our sponsors. They help us make our
		dreams come true.
	</p>

	<ul class="support-sponsors">
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
	.hero-section {
		margin-block: 10rem 8rem;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 4rem;
	}

	h1 {
		font-weight: 500;
		font-size: 3rem;
	}

	.hero-subtitle {
		color: var(--text);
		color: var(--text-secondary);
		font-weight: 400;
		font-size: 1.5rem;
	}

	.hero-buttons {
		display: flex;
		gap: 1.5rem;
		margin-block: 3rem;

		button {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			cursor: pointer;
			border: none;

			border-radius: 0.75rem;
			background: var(--primary);
			padding: 1rem 2rem;
			color: var(--background);
			font-weight: 500;
			font-size: 1.25rem;
		}
	}

	.hero-asso {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;

		img {
			aspect-ratio: initial;
			width: 8rem;
		}
	}

	.hero-footer {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@keyframes jumpInfinite {
		0% {
			top: 3rem;
		}
		50% {
			top: 4.5rem;
		}
		100% {
			top: 3rem;
		}
	}

	.hero-arrow {
		position: absolute;
		animation: jumpInfinite 1.5s infinite;
	}

	.video-section {
		margin-bottom: 6rem;
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

	.support-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block: 10rem 8rem;

		h1 {
			margin-bottom: 0.5rem;
			font-weight: 500;
			font-size: 3rem;
		}

		p {
			margin-top: 0.5rem;
			color: var(--text-secondary);
		}
	}

	.support-sponsors {
		display: flex;
		gap: 1.5rem;
		padding-left: 0;
		list-style: none;

		img {
			border-radius: 50%;
			aspect-ratio: initial;
			width: 8rem;
		}
	}
</style>
