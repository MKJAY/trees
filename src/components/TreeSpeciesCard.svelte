<script lang="ts">
	import type { TreeSpecies } from '../types/tree-species';
	import ImageCard from './ImageCard.svelte';
	import SchemaCard from './SchemaCard.svelte';

	// Props
	export let treeSpecies: TreeSpecies;

	const scrollToTreeSpeciesCard = (scientificName: string) => {
		const treeSpeciesCard = document.getElementById(scientificName);

		if (!treeSpeciesCard) return;

		window.scrollTo({
			top: treeSpeciesCard.offsetTop,
			behavior: 'smooth'
		});
	};
</script>

<div id={treeSpecies.scientificName} class="tree-species-card">
	<div class="main-content">
		<div class="info">
			<h1 class="font-bold-20-24">
				<span>{treeSpecies.scientificName}</span>
				{#if treeSpecies.otherScientificNames}
					<span class="font-regular-16-20"
						>{treeSpecies.otherScientificNames.sort().join(', ')}</span
					>
				{/if}
			</h1>
			<h3 class="font-regular-16-20">
				<span class:disabled={treeSpecies.dutchName.isDisabled}>{treeSpecies.dutchName.value}</span>
				{#if treeSpecies.otherDutchNames}
					<span class="font-regular-14-18">{treeSpecies.otherDutchNames.sort().join(', ')}</span>
				{/if}
			</h3>
			{#if treeSpecies.crossedTreeSpeciesScientificNames}
				<h5 class="font-regular-14-18">
					{#each treeSpecies.crossedTreeSpeciesScientificNames.sort() as treeSpeciesScientificName, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							class="clickable"
							on:click={() => scrollToTreeSpeciesCard(treeSpeciesScientificName)}
						>
							{treeSpeciesScientificName}
						</span>
						{#if index + 1 < treeSpecies.crossedTreeSpeciesScientificNames.length}
							<span>&nbsp;&#38;&nbsp;</span>
						{/if}
					{/each}
				</h5>
			{/if}
			<a
				href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
					treeSpecies.scientificName.toLowerCase()
				)}`}
				target="_blank"
				rel="noreferrer">Google afbeeldingen</a
			>
		</div>
		{#if treeSpecies.images}
			<div class="images">
				{#each treeSpecies.images as image}
					<ImageCard {image} />
				{/each}
			</div>
		{/if}
		{#if treeSpecies.determinationCharacteristics}
			<div class="determination-characteristics">
				<span class="font-regular-16-20">Determinatiekenmerken</span>
				<ul>
					{#each treeSpecies.determinationCharacteristics as determinationCharacteristic}
						<li>{determinationCharacteristic}</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if treeSpecies.similarTreeSpecies}
			<div class="similar-tree-species">
				<span class="font-regular-16-20">Overeenkomende soorten</span>
				<ul>
					{#each treeSpecies.similarTreeSpecies as similarTreeSpecies}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="font-bold-14-18 clickable"
							on:click={() => scrollToTreeSpeciesCard(similarTreeSpecies.scientificName)}
						>
							{similarTreeSpecies.scientificName}
						</li>
						<ul>
							{#each similarTreeSpecies.differences as difference}
								<li>
									{difference.replace('{scientificName}', similarTreeSpecies.scientificName)}
								</li>
							{/each}
						</ul>
					{/each}
				</ul>
			</div>
		{/if}
		{#if treeSpecies.notes}
			<div class="notes">
				<span class="font-regular-16-20">Notities</span>
				<ul>
					{#each treeSpecies.notes as note}
						<li>{note}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
	<div class="side-content">
		{#if treeSpecies.speciesSpecificCharacteristics}
			<div class="species-specific-characteristics">
				{#each Object.entries(treeSpecies.speciesSpecificCharacteristics) as [_, schema]}
					{#if schema}
						<SchemaCard {schema} />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.tree-species-card {
		display: flex;
		gap: 16px;
		padding: 16px;
		border: 1px solid var(--color-black);
		border-radius: 8px;

		@media only screen and (max-width: 576px) {
			flex-direction: column;
		}

		.main-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 16px;

			.info {
				display: flex;
				flex-direction: column;
				gap: 4px;

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

				h5 {
					display: flex;
				}
			}

			.images {
				display: flex;
				flex-wrap: wrap;
				gap: 16px;

				@media only screen and (max-width: 576px) {
					flex-direction: column;
					flex-wrap: unset;

					:global(.image-card:not(.fullscreen)) {
						width: 100%;
						height: auto;
						aspect-ratio: 1/1;
					}
				}
			}

			.determination-characteristics,
			.similar-tree-species {
				display: flex;
				flex-direction: column;
				gap: 4px;
			}
		}

		.side-content {
			.species-specific-characteristics {
				display: flex;
				flex-direction: column;
				gap: 16px;
			}
		}
	}
</style>
