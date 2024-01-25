<script>
	import { base } from "$app/paths";
</script>

<section class="flex h-screen flex-col items-center justify-center md:px-6 lg:px-8">
	<figure>
		<section class="img-bg" />
		<img src="{base}/logo.svg" alt="logo" class="mb-8" />
	</figure>
	<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">
		Coming Soon
	</h1>
	<p
		class="mt-4 max-w-lg text-center text-lg text-gray-700 dark:text-gray-300 md:text-xl lg:text-2xl"
	>
		The future's codeword? Kayord
	</p>
</section>

<style lang="postcss">
	figure {
		@apply relative flex flex-col;
	}
	figure img,
	.img-bg {
		@apply h-64 w-64 md:h-80 md:w-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary/50;
		}
		33% {
			@apply bg-secondary/50;
		}
		66% {
			@apply bg-accent/50;
		}
		100% {
			@apply bg-primary/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
