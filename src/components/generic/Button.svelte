<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props
	export let label: string;
	export let isDisabled: boolean | undefined = undefined;
</script>

<button disabled={isDisabled} on:click={() => !isDisabled && dispatch('click')}>{label}</button>

<style lang="scss">
	button:disabled {
		cursor: unset;
	}
</style>
