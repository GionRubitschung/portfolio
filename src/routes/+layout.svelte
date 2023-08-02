<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';

	export const prerender = true;
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="pageHeader"><PageHeader /></svelte:fragment>
	<div class="p-4">
		<AnimatedRoute>
			<slot />
		</AnimatedRoute>
	</div>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
