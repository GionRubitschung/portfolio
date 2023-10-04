<script lang="ts">
	import { page } from '$app/stores';
	import { fly, type FlyParams } from 'svelte/transition';
	export let duration = 200;
	export let delay = duration + duration / 2;
	export let y: string = '100%';
	export let x: string = '0';
	const transitionIn: FlyParams = { y, x, duration, delay };
	const transitionOut: FlyParams = { y: `-${y}`, x: `-${x}`, duration };
</script>

{#key $page.url}
	<div in:fly={transitionIn}>
		<slot />
	</div>
{/key}
