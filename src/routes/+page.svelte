<script lang="ts">
	import { setContext } from 'svelte';
	import profile from '$lib/assets/profile.png';

	setContext('pageTitle', 'Gion R.');
</script>

<div class="grid grid-cols-1 grid-rows-1 w-screen min-h-[80vh] content-center">
	<div class="flex items-center justify-center">
		<div class="grid grid-rows-2 md:grid-cols-12 md:grid-rows-1">
			<div
				class="flex place-content-center row-start-2 items-center md:place-content-start md:row-start-1 md:col-span-3 md:col-start-3"
			>
				<div>
					<h1 class="text-4xl font-semibold md:text-5xl">
						Gion Andri R. <p class="text-primary-300 font-normal">DevOps Engineer</p>
					</h1>
					<a href="/about" class="anchor text-sm ml-[1.5px]">Read more</a>
				</div>
			</div>
			<img
				alt="Profile"
				src={profile}
				class="p-4 w-64 rounded-3xl row-start-1 place-self-center md:p-0 md:place-self-start md:w-full md:col-span-3 md:col-start-7"
			/>
		</div>
	</div>
</div>
