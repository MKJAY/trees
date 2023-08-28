<script lang="ts">
	import TreeSpeciesCard from '../../components/TreeSpeciesCard.svelte';
	import Button from '../../components/generic/Button.svelte';
	import NavBar from '../../components/generic/NavBar.svelte';
	import { TREE_SPECIES } from '../../constants/tree-species';

	const shuffledTreeSpecies = TREE_SPECIES.sort(() => Math.random() - 0.5);

	let currentTreeSpeciesIndex = 0;
	let namesAreBlurred = true;

	const updateCurrentTreeSpeciesIndex = (isNext: boolean) => {
		if (isNext) {
			currentTreeSpeciesIndex++;
		} else {
			currentTreeSpeciesIndex += currentTreeSpeciesIndex > 0 ? -1 : 0;
		}

		namesAreBlurred = true;
	};
</script>

<div class="container">
	<div class="header">
		<h1 class="font-regular-30-34">Quiz</h1>
		<div class="actions">
			<Button
				label="Back"
				isDisabled={currentTreeSpeciesIndex === 0}
				on:click={() => updateCurrentTreeSpeciesIndex(false)}
			/>
			<Button label="Show" on:click={() => (namesAreBlurred = false)} />
			<Button label="Next" on:click={() => updateCurrentTreeSpeciesIndex(true)} />
		</div>
		<NavBar />
	</div>
	<div class="content" class:blurred-names={namesAreBlurred}>
		<TreeSpeciesCard treeSpecies={shuffledTreeSpecies[currentTreeSpeciesIndex]} />
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
