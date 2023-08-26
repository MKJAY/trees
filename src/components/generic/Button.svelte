<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props
	export let label: string;
</script>

<button on:click={() => dispatch('click')}>{label}</button>
