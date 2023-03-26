<script lang="ts">
	import { TREES } from '../constants/trees.constant';
	import type { Tree } from '../types/tree.type';
	import ImageCard from './ImageCard.svelte';
	import SchemaCard from './SchemaCard.svelte';

	export let tree: Tree;

	const getTree = (id: string): Tree | undefined => {
		return TREES.find((tree: Tree): boolean => tree.id === id);
	};
</script>

<div id={tree.id} class="tree-card">
	<div class="main-content">
		<div class="info">
			<h1 class="font-bold-20-24">
				<span>{tree.scientificName}</span>
				{#if tree.otherScientificNames}
					<span class="font-regular-16-20">{tree.otherScientificNames.sort().join(', ')}</span>
				{/if}
			</h1>
			<h3 class="font-regular-16-20">
				<span class:disabled={tree.dutchName.isDisabled}>{tree.dutchName.value}</span>
				{#if tree.otherDutchNames}
					<span class="font-regular-14-18">{tree.otherDutchNames.sort().join(', ')}</span>
				{/if}
			</h3>
			<a
				href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
					tree.scientificName.toLowerCase()
				)}`}
				target="_blank"
				rel="noreferrer">Google afbeeldingen</a
			>
		</div>
		{#if tree.images}
			<div class="images">
				{#each tree.images as image}
					<ImageCard {image} />
				{/each}
			</div>
		{/if}
		{#if tree.determinationCharacteristics}
			<div class="determination-characteristics">
				<span class="font-regular-16-20">Determinatiekenmerken</span>
				<ul>
					{#each tree.determinationCharacteristics as determinationCharacteristic}
						<li>{determinationCharacteristic}</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if tree.similarTrees}
			<div class="similar-trees">
				<span class="font-regular-16-20">Overeenkomende soorten</span>
				<ul>
					{#each tree.similarTrees as similarTree}
						{@const similarTreeScientificName = getTree(similarTree.id).scientificName}
						<li class="font-bold-14-18">{similarTreeScientificName}</li>
						<ul>
							{#each similarTree.differences as difference}
								<li>
									{difference.replace('{scientificName}', similarTreeScientificName)}
								</li>
							{/each}
						</ul>
					{/each}
				</ul>
			</div>
		{/if}
		{#if tree.notes}
			<div class="notes">
				<span class="font-regular-16-20">Notities</span>
				<p>{tree.notes}</p>
			</div>
		{/if}
	</div>
	<div class="side-content">
		{#if tree.speciesSpecificCharacteristics}
			<div class="species-specific-characteristics">
				{#each Object.entries(tree.speciesSpecificCharacteristics) as [_, schema]}
					{#if schema}
						<SchemaCard {schema} />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.tree-card {
		display: flex;
		padding: 16px;
		border: 1px solid var(--color-black);
		border-radius: 8px;

		@media only screen and (max-width: 576px) {
			flex-direction: column;
		}

		.main-content {
			flex: 1;

			& > div:not(:first-of-type) {
				margin-top: 16px;
			}

			.info {
				h1,
				h3 {
					display: flex;
					align-items: center;

					span {
						&:not(:first-of-type) {
							border-left: 1px solid var(--color-black);
							margin-left: 8px;
							padding-left: 8px;
						}

						&.disabled {
							opacity: 0.32;
						}
					}
				}

				h3,
				a {
					margin-top: 4px;
				}
			}

			.images {
				display: flex;
				flex-wrap: wrap;
				gap: 16px;
			}

			.determination-characteristics {
				ul {
					margin-top: 4px;
				}
			}

			.similar-trees {
				ul {
					margin-top: 4px;
				}
			}
		}

		.side-content {
			& > div:not(:first-of-type) {
				margin-top: 16px;
			}

			@media only screen and (max-width: 576px) {
				& > div {
					margin-top: 16px;
				}
			}

			.species-specific-characteristics {
				:global(.schema-card):not(:first-of-type) {
					margin-top: 16px;
				}
			}
		}
	}
</style>
