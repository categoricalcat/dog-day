<script lang="ts">
	import '$lib/reset.css';

	export let data: Breed;
</script>

<img width="200" src={data.image.url} alt={`${data.name} dog breed`} />
<h1>{data.name}</h1>
<p>Bred for - {data.bred_for}</p>
<p>Temperament - {data.temperament}</p>
<p>Origin - {data.origin}</p>
<p>Life span - {data.life_span}</p>
<p>Weight - {data.weight.metric}</p>
<p>Height - {data.height.metric}</p>
<p>Country code - {data.country_code}</p>
<p>Breed Group - {data.breed_group}</p>
<p>History - {data.history}</p>
