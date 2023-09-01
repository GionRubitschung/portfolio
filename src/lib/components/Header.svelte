<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { routes } from '$lib/stores';
	import profile from '$lib/assets/profile.png';
	import { page } from '$app/stores';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<a href="/">
			<img
				alt="Profile"
				src={profile}
				class="h-24 rounded-full {$page.url.pathname === '/'
					? 'border-2 border-solid border-primary-400'
					: ''}"
			/></a
		>
	</svelte:fragment>
	<h1 class="text-2xl font-medium">
		<div class="flex gap-2">
			<div class="border-2 border-solid border-primary-400 p-4 rounded-full transition-all">
				{#each $routes as route (route.path)}
					<a
						href={route.path}
						class={`btn ${route.path === $page.url.pathname ? 'variant-filled' : ''}`}
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
