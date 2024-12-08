<script lang="ts">
	import Journey from '$components/molecules/journey.svelte'
</script>

<section class="description-section">
	<div class="description-content">
		<div>
			<h1>The Cubesat</h1>
			<p>
				TOLOSAT est un nanosatellite de 3 unités. Des équipes spécifiques sont
				chargées de faire convenir le nanosatellite aux exigences électrique,
				thermique et mécanique d’une mise en orbite ainsi que du support des
				charges utiles.
			</p>
		</div>
		<div>
			<img src="/images/3U-background.png" alt="" />
		</div>
	</div>
</section>

<section class="roadmap-section">
	<h1>Our Roadmap</h1>

	<Journey />
</section>

<section class="payloads-section">
	<h1>Payloads</h1>
	<p>
		We are developing a series of payloads to be integrated into our CubeSat.
	</p>
	<h2>Iridium</h2>
	<div class="iridium-content">
		<p>
			La première charge utile scientifique vise à établir un lien
			bidirectionnel entre TOLOSAT et la constellation Iridium-Next. Ceci ayant
			pour but d’apporter plus de flexibilité aux opérations de
			télécommunication.
		</p>

		<img src="/images/iridium.png" alt="" />
	</div>

	<h2>Gravimetry</h2>
	<p>
		La seconde mission scientifique cherche à observer les variations
		temporelles du champ de gravité terrestre. Cette solution se base sur une «
		approche accélérométrique » appuyée par le suivi GNSS.
	</p>
</section>

<style>
	h1 {
		font-weight: 500;
		font-size: 3rem;
	}

	.description-section {
		margin-block: 12rem 10rem;
	}

	.description-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;

		img {
			width: 100%;
		}
	}

	.roadmap-section {
		margin-bottom: 2rem;
		min-height: 32rem;
	}

	.payloads-section {
		margin-bottom: 6rem;

		h2 {
			font-weight: 500;
			font-size: 2rem;
		}

		img {
			width: 50%;
		}
	}

	.iridium-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 2rem;
	}
</style>
