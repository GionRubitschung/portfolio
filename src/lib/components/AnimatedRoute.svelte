<script lang="ts">
	import { page } from '$app/stores';
	import { send, receive } from '$lib/crossfade';
</script>

{#key $page.url}
	<div out:send={{ key: $page.url }} in:receive={{ key: $page.url }}>
		<slot />
	</div>
{/key}
