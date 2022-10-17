<script lang="ts">
	import '$css/reset.css';
	import '$css/app.scss';
	import type { PageData } from './$types';
	import breeds from '$breeds.json';

	import startCase from 'lodash/startCase';
	import getBreed, { formatBreed } from '$lib/getBreed';
	import random from '$lib/random';

	export let data: PageData;

	const {
		description,
		image: { alt, height, src, width },
		features,
		title
	} = data.breed;
</script>

<main class="container mx-auto p-6">
	<button
		on:click={() => {
			const id = breeds[(random() * breeds.length) | 0];
			if (!id) throw new Error('No breed found');

			getBreed(id)
				.then(formatBreed)
				.then((breed) => {
					data.breed = breed;
				})
				.catch((err) => {
					console.error(err);
				});
		}}
		class="mx-auto px-6 py-2 bg-white rounded-lg shadow-lg dark:bg-gray-800"
	>
		NEW
	</button>

	<h1 class="text-center text-4xl mb-6 font-bold uppercase">dog of the day</h1>

	<article
		class="w-full mx-auto max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
	>
		<img
			class="object-cover object-center w-full h-56"
			{width}
			{src}
			{alt}
			{height}
		/>

		<div class="flex items-center px-6 py-3 bg-gray-900">
			<h2 class="text-lg font-bold text-white">
				{@html title}
			</h2>
		</div>

		<div class="px-6 py-4 pb-6">
			<p class=" text-gray-700 dark:text-gray-400">
				{@html description}
			</p>

			<ul class="flex flex-wrap">
				{#each features as { name, value }}
					<li
						class="flex w-1/2  items-center mt-4 text-gray-700 dark:text-gray-200"
					>
						<h3 class="px-2 text-sm">
							<span class="text-base font-semibold">{startCase(name)}</span>
							<br />
							{value}
						</h3>
					</li>
				{/each}
			</ul>
		</div>
	</article>
</main>
