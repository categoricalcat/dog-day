<script lang="ts">
	import type { FormatedBreed } from '$lib/getBreed';
	import startCase from 'lodash/startCase';

	export let data: FormatedBreed;

	const {
		description,
		image: { alt, height, src, width },
		features,
		title
	} = data;
</script>

<main class="container mx-auto p-6">
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
