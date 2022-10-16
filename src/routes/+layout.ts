import random from '$lib/random';
import type { PageLoad } from '$types/page';
import breeds from '../breeds.json';

export const prerender = true;

export const load: PageLoad = () => breeds[(random() * breeds.length) | 0];
