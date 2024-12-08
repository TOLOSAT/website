<script lang="ts">
	import type { PageData } from './$types'

	import ArrowUpRightIcon from '~icons/tabler/arrow-up-right'
	import AirBalloonIcon from '~icons/tabler/air-balloon'
	import RocketIcon from '~icons/tabler/rocket'
	
	let { data }: { data: PageData } = $props()
</script>

<section class="origin-section">
	<h1>Origine de Tolosat</h1>
	<div class="origin-content">
		<div>
			<div class="origin-subtitle">
				<img src="/images/cubesat-isae.png" alt="Supaéro Cubesat Club Logo" />
				<h2>Club Cubesat Supaéro</h2>
			</div>
			<p>
				Le Club CubeSat est un club technique de l’ISAE-Supaéro composé d’
				étudiants originaires des cycles ingénieur et master. Il a pour objectif
				de faire découvrir le milieu du spatial sous un angle nouveau : celui de
				la conception de nano-satellites. Les étudiants ont ainsi l’opportunité
				de travailler au sein du club sur des projets interdisciplinaires
				ambitieux, ayant des applications scientifiques et techniques concrètes.
				Le club a participé au développement d’EntrySat, lancé en Juillet 2019.
				Le principal projet du club, le cubesat TOLOSAT, né d’une coopération
				avec l’association ASTRE a démarré en février 2018 et poursuit son
				développement.
			</p>

			<div class="origin-buttons">
				<a href="/">
					Read More
					<ArrowUpRightIcon width="1.5rem" height="1.5rem" />
				</a>
			</div>
		</div>

		<div>
			<div class="origin-subtitle">
				<img src="/images/astre.png" alt="ASTRE Logo" />
				<h2>A.S.T.R.E</h2>
			</div>
			<p>
				TOLOSAT n’est que l’un des projets que comprend l’ASTRE. Acronyme de
				Association Spatiale Toulousaine de Recherche Etudiante, l’association
				rassemble des étudiants tous passionnés d’espace autour de projets
				concrets ! Forte d’une histoire qui remonte à octobre 2017,
				l’association comprenait au départ douze étudiants, tous de l’INSA de
				Toulouse, auxquels vinrent s’ajouter progressivement des étudiants de
				quatre écoles toulousaines : L’Ecole Nationale de l’Aviation Civile
				(ENAC), l’Université Paul Sabatier, l’Institut Supérieur de
				l’Aéronautique et de l’Espace (ISAE-Supaéro) et l’Ecole nationale
				supérieure d’électrotechnique, d’électronique, d’informatique,
				d’hydraulique et des télécommunications (ENSEEIHT). Malgré d’inévitables
				évolutions au cours de son histoire, l’objectif de l’Association est,
				lui, resté intact ! La constitution d’une structure dans laquelle les
				étudiants pourront apprendre autour de l’ingénierie spatiale à travers
				des projets concrets ! Justement, ces projets (autres que Tolosat),
				quels sont-ils ? Faisons un petit tour d’horizon ! Astre’Launch: Projet
				cette fois centré autour des fusées, Astre‘Launch a l’avantage de
				nécessiter de moins de moyens que les autres projets de l’ASTRE, qu’ils
				soient financiers ou temporels. En effet, les projets de fusées
				expérimentales sont réalisables en moins d’un an, le budget alloué est
				raisonnable, et le domaine est bien documenté. Astre’Loon: Ce projet,
				développé depuis 2019 consiste en l’envoi d’un ballon sonde dans
				l’atmosphère. En évoluant dans un milieu proche des conditions
				spatiales, le ballon permet de tester les composants du nanosatellite du
				projet Tolosat. Les autres objectifs de ce ballon sont de développer une
				plateforme de ballon open-source et de former les membres du projet aux
				enjeux et aux contraintes d’un système spatial. Astre’Nogs: Le projet
				Astre’Nogs est un projet de construction d’une station sol (station de
				relais pour nanosatellite). L’objectif est qu’à l’avenir, cette station
				sol s’intègre dans le réseau SatNOGS, qui regroupe un grand nombre de
				stations sol à travers le monde. Une base de données des différents
				satellites ainsi que de la documentation pour créer sa propre station
				sol, tout comme un forum d’échange sont aussi présents sur le site.
			</p>

			<div class="origin-buttons">
				<a href="/">
					Read More
					<ArrowUpRightIcon width="1.5rem" height="1.5rem" />
				</a>
				<a href="/">
					ASTRE Loon
					<AirBalloonIcon width="1.5rem" height="1.5rem" />
				</a>
				<a href="/">
					Astre Launch
					<RocketIcon width="1.5rem" height="1.5rem" />
				</a>
			</div>
		</div>
	</div>
</section>

<section class="teams-section">
	<h1>Our teams</h1>
	<p>
		We are organised in several teams, each responsible for a different aspect
		of the project.
	</p>

	<ul>
		{#each data.teams as team}
		<li>
			<a href="/teams/{team.slug}">
				<img src="/images/teams/{team.logo}" alt="{team.title} Logo" />
				<span>{team.title}</span>
			</a>
		</li>
		{/each}
	</ul>
</section>

<style>
	.origin-section {
		margin-block: 10rem 6rem;

		h1 {
			font-weight: 500;
			font-size: 3rem;
		}
	}

	.origin-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
	}

	.origin-subtitle {
		display: flex;
		align-items: center;
		gap: 1rem;

		h2 {
			font-weight: 500;
			font-size: 2rem;
		}

		img {
			width: 4rem;
		}
	}

	.origin-buttons {
		display: flex;
		gap: 1.5rem;
		margin-block: 3rem;

		a {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			border-radius: 0.75rem;
			background: var(--primary);
			padding: 1rem 2rem;
			color: var(--background);
			font-weight: 500;
			font-size: 1.25rem;
			text-decoration: none;
		}
	}

	.teams-section {
		margin-bottom: 8rem;

		h1 {
			font-weight: 500;
			font-size: 3rem;
		}

		p {
			margin-block: 2rem;
		}
		ul {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 3rem;
			padding: 0;
			list-style: none;
		}

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			color: inherit;
			text-decoration: none;
		}

		img {
			border-radius: 50%;
			aspect-ratio: initial;
			width: 6rem;
		}
	}
</style>
