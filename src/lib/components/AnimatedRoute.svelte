<!-- <script lang="ts">
	import { page } from '$app/stores';
	import { send, receive } from '$lib/crossfade';
</script> -->

<!-- {#key $page.url}
	<div out:send={{ key: $page.url }} in:receive={{ key: $page.url }}>
		<slot />
	</div>
{/key} -->

<script lang="ts">
	import { page } from '$app/stores';
	import { fly, type FlyParams } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	export let duration = 200;
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
