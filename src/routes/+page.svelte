<script lang="ts">
	import TreeSpeciesCard from '../components/TreeSpeciesCard.svelte';
	import NavBar from '../components/generic/NavBar.svelte';
	import { TREE_SPECIES } from '../constants/tree-species';
	import type { TreeSpecies } from '../types/tree-species';

	TREE_SPECIES.sort((a: TreeSpecies, b: TreeSpecies): number => {
		return a.scientificName.localeCompare(b.scientificName);
	});
</script>

<div class="container">
	<div class="header">
		<div class="title">
			<h1 class="font-regular-30-34">Boomsoorten</h1>
			<div class="info">
				<span>Aantal: {TREE_SPECIES.length}</span>
			</div>
		</div>
		<NavBar />
	</div>
	<div class="content">
		{#each TREE_SPECIES as treeSpecies}
			<TreeSpeciesCard {treeSpecies} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px;

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				display: flex;
				align-items: center;
				gap: 16px;

				.info {
					border-left: 1px solid var(--color-black);
					padding-left: 16px;
				}
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
	}
</style>
