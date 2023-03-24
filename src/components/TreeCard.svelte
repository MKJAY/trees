<script lang="ts">
	import { TREES } from '../constants/trees.constant';
	import type { Tree } from '../types/tree.type';
	import ImageCard from './ImageCard.svelte';
	import Schema from './Schema.svelte';

	export let tree: Tree;

	const getTree = (id: string): Tree => {
		return TREES.find((tree: Tree): boolean => tree.id === id)!;
	};

	const getTreeScientificNames = (id: string): string => {
		return getTree(id)?.scientificNames!.join(', ');
	};
</script>

<div id={tree.id} class="tree-card">
	<div class="main-content">
		<div class="info">
			<h1 class="font-bold-20-24">{tree.scientificNames.join(', ')}</h1>
			<h3 class="font-regular-16-20">{tree.dutchNames.join(', ')}</h3>
			<a
				href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
					tree.scientificNames[0].toLowerCase()
				)}`}
				target="_blank"
				rel="noreferrer">Google afbeeldingen</a
			>
		</div>
		<div class="images">
			{#each tree.images as image}
				<ImageCard {image} />
			{/each}
		</div>
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
						<li class="font-bold-14-18">{getTreeScientificNames(similarTree.id)}</li>
						<ul>
							{#each similarTree.differences as difference}
								<li>
									{difference.replace('{scientificName}', getTreeScientificNames(similarTree.id))}
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
		<div class="species-specific-characteristics">
			{#each Object.entries(tree.speciesSpecificCharacteristics) as [_, schema]}
				{#if schema}
					<Schema {schema} />
				{/if}
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.tree-card {
		display: flex;
		margin: 16px;
		padding: 16px;
		border: 1px solid var(--color-black);
		border-radius: 8px;

		.main-content {
			flex: 1;

			& > div:not(:first-of-type) {
				margin-top: 16px;
			}

			.info {
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
			.species-specific-characteristics {
				:global(.schema):not(:first-of-type) {
					margin-top: 16px;
				}
			}
		}
	}
</style>
