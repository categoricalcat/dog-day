import type { Breed } from '$types/breeds';
import fetch from 'isomorphic-unfetch';

const getBreed = (id: number): Promise<Breed> =>
	fetch(`https://www.akc.org/wp-json/wp/v2/breed/${id}?_embed`, {
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

export default getBreed;
