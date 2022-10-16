import type { Breed } from '$types/breeds';
import fetch from 'isomorphic-unfetch';

const getBreed = (id: number): Promise<Breed> =>
	fetch(
		`https://cors-anywhere.herokuapp.com/https://www.akc.org/wp-json/wp/v2/breed/${id}?_embed`,
		{
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			}
		}
	).then((r) => r.json());

export default getBreed;
