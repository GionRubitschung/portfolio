<script lang="ts">
	import { setContext } from 'svelte';
	import profile from '$lib/assets/profile.png';

	setContext('pageTitle', 'Gion R.');
</script>

<div class="flex flex-col gap-1 justify-stretch min-h-[80vh] min-w-screen overflow-">
	<div class="flex-grow flex items-center">
		<div class="flex-grow">
			<!-- Content below header -->
			<div class="h-5/6 flex items-center justify-center">
				<h1 class="text-5xl font-semibold">
					Gion Andri R. <p class="text-primary-400 font-normal">DevOps Engineer</p>
				</h1>
			</div>
		</div>
		<div class="w-1/3 h-full flex items-center justify-end">
			<!-- Image on the right -->
			<img alt="Profile" src={profile} class="max-h-1/2 mx-auto" />
		</div>
	</div>
</div>
