<script lang="ts">
	import type { FormatedBreed } from '$lib/getBreed';

	export let data: FormatedBreed;

	const {
		description,
		image: { alt, height, src, width },
		features,
		title
	} = data;
</script>

<main>
	<h1>
		{@html title}
	</h1>

	{@html description}

	{#each features as { name, value }}
		<p>{value} - {name}</p>
	{/each}

	<img {width} {src} {alt} {height} />
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
