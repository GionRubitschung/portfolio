<script lang="ts">
	import { nextRoute } from '$lib/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-row-reverse p-4">
	{#if $nextRoute}
		<a href={$nextRoute.path}>
			<button class="btn-icon btn-icon-lg">
				<Icon icon="iconamoon:arrow-down-5-circle-thin" height="100%" />
			</button>
		</a>
	{/if}
</div>
