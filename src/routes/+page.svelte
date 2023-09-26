<script lang="ts">
	import { setContext } from 'svelte';
	import profile from '$lib/assets/profile.png';

	setContext('pageTitle', 'Gion R.');
</script>

<div class="grid grid-cols-1 grid-rows-1 w-screen min-h-[80vh] content-center">
	<div class="flex items-center justify-center">
		<div class="grid grid-cols-12">
			<div class="col-span-3 col-start-3 flex items-center">
				<div>
					<h1 class="text-5xl font-semibold">
						Gion Andri R. <p class="text-primary-300 font-normal">DevOps Engineer</p>
					</h1>
					<a href="/about" class="anchor text-sm ml-[1.5px]">Read more</a>
				</div>
			</div>
			<img alt="Profile" src={profile} class="col-span-3 col-start-7 rounded-3xl" />
		</div>
	</div>
</div>
