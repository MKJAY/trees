<script lang="ts">
	import TreeCard from '../components/TreeSpeciesCard.svelte';
	import { TREE_SPECIES } from '../constants/tree-species.constant';
	import type { TreeSpecies } from '../types/tree-species.type';

	TREE_SPECIES.sort((a: TreeSpecies, b: TreeSpecies): number => {
		return a.scientificName.localeCompare(b.scientificName);
	});

	const treeSpeciesIds = TREE_SPECIES.map((treeSpecies: TreeSpecies): string => treeSpecies.id);
	const idsAreUnique = new Set(treeSpeciesIds).size === TREE_SPECIES.length;
</script>

<div class="container">
	<div class="header">
		<h1 class="font-regular-30-34">Bomen</h1>
		<div class="info">
			<span>Aantal: {TREE_SPECIES.length}</span>
			<span>Unieke ID's? {idsAreUnique ? 'ja' : 'nee'}</span>
		</div>
	</div>
	<div class="content">
		{#each TREE_SPECIES as treeSpecies}
			<TreeCard {treeSpecies} />
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
			:global(.tree-species-card):not(:first-of-type) {
				margin-top: 16px;
			}
		}
	}
</style>
