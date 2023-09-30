<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<AnimatedRoute>
		<main class="container">
			<slot />
		</main>
	</AnimatedRoute>
</AppShell>
