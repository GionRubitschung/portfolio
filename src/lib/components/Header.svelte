<script lang="ts">
	import { currentRoute } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<Icon icon={$currentRoute.icon} height="60" />
	</svelte:fragment>
	<h1 class="text-2xl font-medium">
		{$currentRoute.name}
	</h1>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
