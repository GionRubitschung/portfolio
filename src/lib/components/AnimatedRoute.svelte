<script lang="ts">
	import { page } from '$app/stores';
	import { fly, type FlyParams } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let duration = 100;
	export let delay = duration + duration / 2;
	export let y: string = '100%';
	export let x: string = '0';

	const transitionIn: FlyParams = { easing: cubicOut, y, x, duration, delay };
	const transitionOut: FlyParams = { easing: cubicIn, y: `-${y}`, x: `-${x}`, duration };
</script>

{#key $page.url}
	<div in:fly={transitionIn} out:fly={transitionOut}>
		<slot />
	</div>
{/key}
