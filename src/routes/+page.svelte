<script lang="ts">
	import '$lib/reset.css';
	import '$lib/global.scss';
	import type { Breed } from '$types/breeds';

	export let data: Breed;
	console.log(data);

	const {
		content: { rendered: content },
		title: { rendered: title }
	} = data;

	const {
		alt_text,
		source_url,
		media_details: { width = 0, height = 0 } = {}
	} = data._embedded['wp:featuredmedia']?.[0] || {};

	const terms =
		data._embedded['wp:term']
			?.flat()
			?.map(({ name, taxonomy }) => ({ name, taxonomy })) || [];
</script>

<main>
	<h1>
		{@html title}
	</h1>

	{@html content}

	{#each terms as { name, taxonomy }}
		<p>{taxonomy} - {name}</p>
	{/each}

	<img {width} src={source_url} alt={alt_text} {height} />
</main>

<style>
	main {
		max-width: 512px;
		margin: 1rem auto;
	}

	* {
		margin-bottom: 1rem;
	}
</style>
