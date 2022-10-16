import { Load } from '@sveltejs/kit';

export type PageLoad = Load<
	any,
	null,
	{
		breeds: string[];
	}
>;
