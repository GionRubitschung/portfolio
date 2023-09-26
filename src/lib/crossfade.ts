import { crossfade } from 'svelte/transition';
// import { cubicIn } from 'svelte/easing';

export const [send, receive] = crossfade({ duration: 2000 });
