<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<AnimatedRoute>
		<main class="container">
			<slot />
		</main>
	</AnimatedRoute>
</AppShell>
