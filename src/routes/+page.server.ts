import getBreed from '$lib/getBreed';
import random from '$lib/random';
import type { PageLoad } from '$types/page';
import breeds from '../breeds.json';

export const prerender = true;

export const load: PageLoad = async () => {
	const id = breeds[(random() * breeds.length) | 0];
	if (!id) throw new Error('No breed found');

	return getBreed(id);
};
