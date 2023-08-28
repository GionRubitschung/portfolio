<script lang="ts">
	import { currentRoute, routes } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import { AppBar, LightSwitch, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<Icon icon={$currentRoute.icon} height="60" />
	</svelte:fragment>
	<h1 class="text-2xl font-medium">
		<div class="flex gap-2">
			{#each $routes as route}
				<button class={`btn ${route.path === $currentRoute.path ? 'variant-filled' : ''}`}
					><a href={route.path}>{route.name}</a></button
				>
			{/each}
		</div>
	</h1>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
