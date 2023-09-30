<script lang="ts">
	import { setContext } from 'svelte';
	import profile from '$lib/assets/profile.png';

	setContext('pageTitle', 'Gion R.');
</script>

<div class="grid grid-cols-1 grid-rows-1 w-screen min-h-[80vh] content-center">
	<div class="flex items-center justify-center">
		<div class="grid grid-rows-2 md:grid-cols-12 md:grid-rows-1">
			<div
				class="flex place-content-center row-start-2 items-center md:place-content-start md:items-start md:row-start-1 md:col-span-3 md:col-start-3"
			>
				<div class="px-4 pb-4 md:px-0 md:pb-0">
					<h1 class="text-4xl font-semibold md:text-5xl">
						Gion Andri R. <p class="text-primary-300 font-normal">DevOps Engineer</p>
					</h1>
					<div class="mt-4">
						<h2 class="text-2xl text-secondary-400">What I do at work</h2>
						<p class="mb-4">
							I am a software developer based in Switzerland and currently working at Swisscom. At
							Swisscom I design and implement roboters that automate business workflows, create
							websites with a great ui and engineer CI/CD workflows for automated deployments.
						</p>
						<h2 class="text-2xl text-secondary-400">What I am studying</h2>
						<p class="mb-4">
							In 2023, I started my Bachelor of Science in Data Engineering at the Bern University
							of Applied Sciences. I am completing my studies on a part-time basis. At uni I learn
							software engineering in combination with machine learning.
						</p>
						<h2 class="text-2xl text-secondary-400">What I do during my free time</h2>
						<p>
							When I am not at work or studying for uni I like to spend my time with friends,
							training in the gym, riding my motorbike during summer and skiing in winter months or
							program something, for example this website.
						</p>
					</div>
				</div>
			</div>
			<!-- FIXME: position on mobile view is wrong -->
			<img
				alt="Profile"
				src={profile}
				class="w-64 rounded-3xl row-start-1 place-self-center md:place-self-start md:w-full md:col-span-3 md:col-start-7"
			/>
		</div>
	</div>
</div>
