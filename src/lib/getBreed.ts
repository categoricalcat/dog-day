import type { Breed } from '$types/breeds';
import fetch from 'isomorphic-unfetch';

const getBreed = (id: number): Promise<Breed> =>
	fetch(`https://www.akc.org/wp-json/wp/v2/breed/${id}?_embed`, {
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		}
	})
		.then((r) => r.json())
		.catch((e) => {
			console.error(e);

			return {};
		});

export default getBreed;
