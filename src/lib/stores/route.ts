import type { Route } from '$lib/types';
import { readable } from 'svelte/store';

export const routes = readable<Route[]>([
	{
		name: 'About me',
		path: '/about',
	},
	{
		name: 'My Work',
		path: '/work',
	},
	{
		name: 'Contact Me',
		path: '/contact',
	},
	{
		name: 'Projects',
		path: '/projects',
	},
]);
