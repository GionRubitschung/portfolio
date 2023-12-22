<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { setContext } from 'svelte';
	import scLogo from '$lib/assets/sc_logo.svg?raw';
	import Icon from '@iconify/svelte';

	const workExpierences = [
		{
			title: 'DevOps Engineer',
			description: 'mogi',
			icon: scLogo,
		},
	];

	setContext('pageTitle', 'My Experience');
</script>

<h1 class="text-primary text-4xl">Professional Experience</h1>

<p class="text-token">asdf</p>

<Accordion>
	{#each workExpierences as work}
		<AccordionItem>
			<svelte:fragment slot="lead">
				<div class="w-8">
					{@html work.icon}
				</div></svelte:fragment
			>
			<svelte:fragment slot="summary">{work.title}</svelte:fragment>
			<svelte:fragment slot="content">{work.description}</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>

<h1 class="text-primary text-4xl">Academic Background</h1>
