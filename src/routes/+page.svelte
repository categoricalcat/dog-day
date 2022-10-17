<script lang="ts">
	import '$css/reset.css';
	import '$css/app.scss';

	import type { PageData } from './$types';

	import startCase from 'lodash/startCase';

	export let data: PageData;

	$: ({
		description,
		image: { alt, height, src, width },
		features,
		title
	} = data.breed);
</script>

<svelte:head>
	<title>Everyday is Dog Day - {title}</title>
	<meta name="description" content={alt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`Everyday is Dog Day - ${title}`} />
	<meta
		name="twitter:description"
		content={description.replace(/<[^>]*>?/gm, '')}
	/>
	<meta name="twitter:image" content={src} />
	<meta property="og:url" content="https://walze.github.io/dog-day/" />
	<meta property="og:title" content={`Everyday is Dog Day - ${title}`} />
	<meta
		property="og:description"
		content={description.replace(/<[^>]*>?/gm, '')}
	/>
	<meta property="og:image" content={src} />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="container mx-auto p-6 pt-4">
	<h1 class="text-center text-2xl mb-4 font-bold uppercase">
		Everyday is Dog Day
	</h1>

	<article
		class="w-full mx-auto max-w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
	>
		<img
			class="object-cover object-top w-full h-56"
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

	<p class="w-full mx-auto max-w-lg my-6 px-6">
		Everyday is dog day so I made this App that shows information about a
		different dog breed everyday.
	</p>
</main>
