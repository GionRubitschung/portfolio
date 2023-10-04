<script lang="ts">
	import { setContext } from 'svelte';
	import profile from '$lib/assets/profile.png';

	setContext('pageTitle', 'Gion R.');
</script>

<div class="grid grid-cols-1 grid-rows-1 w-screen min-h-[80vh] content-center">
	<div class="flex items-center justify-center">
		<div class="grid grid-rows-1 xl:grid-cols-12">
			<img
				alt="Profile"
				src={profile}
				class="p-4 w-64 rounded-3xl place-self-center xl:p-0 xl:place-self-start xl:w-full xl:col-span-3 xl:col-start-7 md:hidden xl:hidden"
			/>
			<div
				class="flex place-content-center items-center xl:place-content-start xl:items-start xl:col-span-3 xl:col-start-3"
			>
				<div class="px-4 pb-4 xl:px-0 xl:pb-0">
					<div class="flex justify-between items-end">
						<h1 class="text-4xl font-semibold md:text-5xl">
							Gion Andri R. <p class="text-primary-300 font-normal">DevOps Engineer</p>
						</h1>
						<img
							alt="Profile"
							src={profile}
							class="hidden w-64 rounded-3xl place-self-end md:inline xl:p-0 xl:place-self-start xl:w-full xl:col-span-3 xl:col-start-7 xl:hidden"
						/>
					</div>
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
			<img
				alt="Profile"
				src={profile}
				class="hidden p-4 w-64 rounded-3xl place-self-center xl:p-0 xl:place-self-start xl:w-full xl:col-span-3 xl:col-start-7 xl:inline"
			/>
		</div>
	</div>
</div>
