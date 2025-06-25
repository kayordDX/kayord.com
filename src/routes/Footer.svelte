<script lang="ts">
	import { base } from "$app/paths";

	const links = [
		{
			title: "Privacy Policy",
			href: "/privacy-policy",
		},
	];
</script>

<footer class="bg-background border-b py-12 [--color-primary:var(--color-indigo-500)]">
	<div class="mx-auto max-w-5xl px-6">
		<div class="flex flex-wrap justify-between gap-12">
			<div class="order-last flex items-center gap-3 md:order-first">
				<img src="{base}/logo.svg" alt="logo" class="h-8 w-8" loading="lazy" />
				<span class="text-muted-foreground block text-center text-sm"
					>© {new Date().getFullYear()} kayord, All rights reserved</span
				>
			</div>

			<div class="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
				{#each links as link}
					<a href={link.href} class="text-muted-foreground hover:text-primary block duration-150">
						<span>{link.title}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
