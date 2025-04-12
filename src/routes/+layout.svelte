<script lang="ts">
	import { type Snippet } from "svelte";
	import "../app.css";
	let { children }: { children?: Snippet } = $props();
</script>

{#if children}
	{@render children()}
{/if}
