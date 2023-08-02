import type { Route } from '$lib/types';
import { derived, readable } from 'svelte/store';
import { page } from '$app/stores';

export const routes = readable<Route[]>([
	{
		name: 'About me',
		path: '/',
		icon: 'iconamoon:profile-thin',
	},
	{
		name: 'My Work',
		path: '/work',
		icon: 'system-uicons:laptop',
	},
	{
		name: 'Contact Me',
		path: '/contact',
		icon: 'fluent:book-contacts-32-regular',
	},
	{
		name: 'Projects',
		path: '/projects',
		icon: 'clarity:terminal-line',
	},
]);

export const currentRoute = derived(
	[routes, page],
	([$routes, $page]) => $routes.find((route) => route.path === $page.url.pathname) ?? $routes[0],
);

export const nextRoute = derived([routes, currentRoute], ([$routes, $currentRoute]) => {
	const idx = $routes.findIndex((route) => route.path === $currentRoute.path);
	if (idx === -1 || idx === $routes.length - 1) return undefined;
	return $routes[idx + 1];
});

export const previousRoute = derived([routes, currentRoute], ([$routes, $currentRoute]) => {
	const idx = $routes.findIndex((route) => route.path === $currentRoute.path);
	if (idx === -1 || idx === 0) return undefined;
	return $routes[idx - 1];
});
