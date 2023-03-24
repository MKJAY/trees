<script lang="ts">
	import TreeCard from '../components/TreeCard.svelte';
	import { TREES } from '../constants/trees.constant';
</script>

{#each TREES as tree}
	<TreeCard {tree} />
{/each}
