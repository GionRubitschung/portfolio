<script lang="ts">
	import { setContext } from 'svelte';
	import profile from '$lib/assets/profile.png';

	setContext('pageTitle', 'Gion R.');
</script>

<div class="grid grid-cols-1 grid-rows-1 w-screen min-h-[80vh] content-center">
	<div class="flex items-center justify-center">
		<div class="grid grid-cols-12">
			<div class="col-span-3 col-start-3">
				<div>
					<h1 class="text-5xl font-semibold">
						Gion Andri R. <p class="text-primary-400 font-normal">DevOps Engineer</p>
					</h1>
					<p class="mt-4">
						Lorem ipsum do repellendus, minus voluptas, ab eaque quas cumque quam maxime fuga
						deleniti dolor assumenda tenetur fugit labore pariatur, dicta facilis. Lorem ipsum
						dolor, sit amet consectetur adipisicing elit. Quibusdam culpa cupiditate accusamus optio
						omnis quisquam hic rem consequuntur commodi! Perferendis vel nostrum in a praesentium
						nulla sit temporibus animi quos. Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</p>
				</div>
			</div>
			<img alt="Profile" src={profile} class="col-span-3 col-start-7 rounded-3xl" />
		</div>
	</div>
</div>
