<script lang="ts">
	import { AppBar, LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { routes } from '$lib/stores';
	import profile from '$lib/assets/profile.png';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	const mobileMenu: PopupSettings = {
		event: 'click',
		target: 'mobileMenu',
		placement: 'bottom',
		closeQuery: '.listbox-item',
	};
</script>

<AppBar
	gridColumns="grid-cols-12"
	slotLead="col-span-6 md:col-span-2"
	slotDefault="md:col-start-3 md:col-span-9 md:place-self-center"
	slotTrail="col-start-11 col-span-2 md:col-start-12 place-content-end"
>
	<svelte:fragment slot="lead">
		<a href="/">
			<img
				alt="Profile"
				src={profile}
				class="h-16 md:h-24 rounded-full {$page.url.pathname === '/'
					? 'border-2 border-solid border-primary-400'
					: ''}"
			/></a
		>
	</svelte:fragment>
	<div class="hidden md:inline md:text-2xl md:font-medium">
		<div class="flex gap-2">
			<div class="border-2 border-solid border-primary-400 p-4 rounded-full transition-all">
				{#each $routes as route (route.path)}
					<a
						href={route.path}
						class={`btn mx-1 ${
							route.path === $page.url.pathname
								? 'bg-primary-active-token'
								: 'hover:variant-soft-primary'
						}`}
					>
						{route.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
	<svelte:fragment slot="trail">
		<LightSwitch class="hidden md:inline" />
		<div class="md:hidden">
			<button class="btn hover:variant-soft-primary" use:popup={mobileMenu}>
				<Icon icon="iconamoon:menu-burger-horizontal" width="40" class="ml-1" />
			</button>
			<div class="card w-48 shadow-xl p-2" data-popup="mobileMenu">
				<div class="space-y-2">
					{#each $routes as route (route.path)}
						<a
							href={route.path}
							class={`btn w-full ${
								route.path === $page.url.pathname
									? 'bg-primary-active-token'
									: 'hover:variant-soft-primary'
							}`}
						>
							{route.name}
						</a>
					{/each}
					<div class="w-full flex place-content-center">
						<LightSwitch />
					</div>
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
