<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	let Component = $state(data.content)
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.name}</title>

	<!-- <link rel="canonical" href={`${url}${data.url}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}${data.url}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={data.meta.image} />

	<meta name="twitter:site" content="@YouTwitterHandle" />
	<meta name="twitter:creator" content="@YouTwitterHandle" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={data.meta.image} />
	<meta name="twitter:widgets:new-embed-design" content="on" /> -->

	<meta
		name="theme-color"
		content="#ffffff"
		media="(prefers-color-scheme: light)"
	/>
	<meta
		name="theme-color"
		content="#000000"
		media="(prefers-color-scheme: dark)"
	/>
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1 class="">{data.meta.title}</h1>
		
		<img src="/images/teams/{data.meta.logo}" alt="blog banner" />
	</hgroup>

	<!-- Post -->
	<Component />
</article>

<style>
	article {
		margin-block: 8rem;
		max-width: 800px;
	}

	h1 {
		font-weight: 500;
		font-size: 3rem;
	}

	img {
		margin-inline: -1.5rem;
		border-radius: 0.75rem;
	}
</style>