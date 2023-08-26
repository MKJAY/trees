<script lang="ts">
	import TreeSpeciesCard from '../../components/TreeSpeciesCard.svelte';
	import Button from '../../components/generic/Button.svelte';
	import NavBar from '../../components/generic/NavBar.svelte';
	import { TREE_SPECIES } from '../../constants/tree-species';
	import type { TreeSpecies } from '../../types/tree-species';

	let treeSpecies: TreeSpecies;
	let namesAreBlurred: boolean;

	const nextRandomTreeSpecies = () => {
		treeSpecies = TREE_SPECIES[Math.floor(Math.random() * TREE_SPECIES.length)];
		namesAreBlurred = true;
	};

	nextRandomTreeSpecies();
</script>

<div class="container">
	<div class="header">
		<h1 class="font-regular-30-34">Quiz</h1>
		<div class="actions">
			<Button label="Next" on:click={nextRandomTreeSpecies} />
			<Button label="Show" on:click={() => (namesAreBlurred = false)} />
		</div>
		<NavBar />
	</div>
	<div class="content" class:blurred-names={namesAreBlurred}>
		<TreeSpeciesCard {treeSpecies} />
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
		}

		.content {
			&.blurred-names {
				:global(.tree-species-card h1),
				:global(.tree-species-card h3) {
					color: transparent;
					text-shadow: 0 0 16px var(--color-black);
				}
			}
		}
	}
</style>
