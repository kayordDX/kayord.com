<script>
	import { Card } from "@kayord/ui";
	import ReceiptTextIcon from "@lucide/svelte/icons/receipt-text";
	import CardDecorator from "./CardDecorator.svelte";
	import { Button } from "@kayord/ui";
</script>

<section class="py-12">
	<div class="@container mx-auto max-w-5xl px-6 flex flex-col items-center">
		<div class="text-center">
			<h2 class="text-balance text-4xl font-semibold lg:text-5xl">Our Focus</h2>
			<p class="mt-4 text-muted-foreground">Projects we are currently working on</p>
		</div>

		<Card.Root class="group border-0 shadow-none max-w-sm w-sm mt-12">
			<Card.Header class="pb-3">
				<CardDecorator>
					<ReceiptTextIcon class="size-6" aria-hidden />
				</CardDecorator>

				<h3 class="mt-6 font-medium">Aviate: Reimagining Point of Sale</h3>
			</Card.Header>

			<Card.Content>
				<p class="mt-3 text-sm">
					Aviate is our completely modern, rethought point-of-sale system. We built Aviate from the
					ground up to be intuitive, efficient, and perfectly suited for today's dynamic
					environments. It's point of sale, reimagined
				</p>
			</Card.Content>
			<Card.Footer>
				<Button href="https://pos.aviatesoft.com">Aviate POS</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
