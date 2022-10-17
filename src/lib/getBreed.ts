import type { Breed } from '$types/breeds';
import fetch from 'isomorphic-unfetch';
import random from './random';

const URI =
	typeof window === 'undefined'
		? 'https://www.akc.org'
		: 'https://cors-anywhere.herokuapp.com/https://www.akc.org';

const getBreed = (id: number): Promise<Breed> =>
	fetch(`${URI}/wp-json/wp/v2/breed/${id}?_embed`, {
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		}
	}).then((r) => r.json());

export const formatBreed = (data: Breed) => {
	const {
		content: { rendered: description },
		title: { rendered: title }
	} = data;

	const {
		alt_text,
		source_url,
		media_details: { width = 0, height = 0 } = {}
	} = data._embedded['wp:featuredmedia']?.[0] || {};

	const features =
		data._embedded['wp:term']
			?.flat()
			?.map(({ name, taxonomy }) => ({ name: taxonomy, value: name })) || [];

	return {
		description,
		title,
		image: {
			alt: alt_text,
			src: source_url,
			width,
			height
		},
		features
	};
};

export type FormatedBreed = ReturnType<typeof formatBreed>;

export const getDog = async () => {
	const breeds = await fetch('./breeds.json').then((r) => r.json());

	const id = breeds[(random() * breeds.length) | 0];
	if (!id) throw new Error('No breed found');

	return getBreed(id).then(formatBreed);
};

export default getBreed;
