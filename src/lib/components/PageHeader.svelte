<script>
	import { previousRoute } from '$lib/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-row-reverse p-4">
	{#if $previousRoute}
		<a href={$previousRoute.path}>
			<button class="btn-icon btn-icon-lg">
				<Icon icon="iconamoon:arrow-up-5-circle-thin" height="100%" />
			</button>
		</a>
	{/if}
</div>
