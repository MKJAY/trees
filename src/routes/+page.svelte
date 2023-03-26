<script lang="ts">
	import TreeCard from '../components/TreeCard.svelte';
	import { TREES } from '../constants/trees.constant';
	import type { Tree } from '../types/tree.type';

	TREES.sort((a: Tree, b: Tree): number => {
		return a.scientificName.localeCompare(b.scientificName);
	});

	const idsAreUnique = new Set(TREES.map((tree: Tree): string => tree.id)).size === TREES.length;
</script>

<div class="container">
	<div class="header">
		<h1 class="font-regular-30-34">Bomen</h1>
		<div class="info">
			<span>Aantal: {TREES.length}</span>
			<span>Unieke ID's? {idsAreUnique ? 'ja' : 'nee'}</span>
		</div>
	</div>
	<div class="content">
		{#each TREES as tree}
			<TreeCard {tree} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		padding: 16px;

		& > div:not(:first-of-type) {
			margin-top: 16px;
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.info {
				display: flex;
				flex-direction: column;
			}
		}

		.content {
			:global(.tree-card):not(:first-of-type) {
				margin-top: 16px;
			}
		}
	}
</style>
