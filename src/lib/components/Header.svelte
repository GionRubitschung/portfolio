<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { currentRoute, routes } from '$lib/stores';
	import Icon from '@iconify/svelte';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<Icon icon={$currentRoute.icon} height="60" />
	</svelte:fragment>
	<h1 class="text-2xl font-medium">
		<div class="flex gap-2">
			<div class="border border-solid border-primary-50 p-4 rounded-full transition-all">
				{#each $routes as route (route.path)}
					<a
						href={route.path}
						class={`btn ${route.path === $currentRoute.path ? 'variant-filled' : ''}`}
					>
						{route.name}
					</a>
				{/each}
			</div>
		</div>
	</h1>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
