<script lang="ts">
	import type { Schema } from '../types/tree.type';

	export let schema: Schema;
</script>

<div class="schema">
	<span class="font-regular-16-20">{schema.label}</span>
	<div class="blocks" style:grid-template-columns={`repeat(${schema.blockLabels.length}, 1fr)`}>
		{#each schema.blockLabels as blockLabel}
			<span>{blockLabel}</span>
		{/each}
		{#each schema.blockLabels as _, index}
			<div class:active={schema.activeBlockIndexes?.includes(index)} />
		{/each}
	</div>
</div>

<style lang="scss">
	.schema {
		.blocks {
			display: grid;
			column-gap: 8px;
			row-gap: 2px;
			margin-top: 4px;

			& > div {
				border: 1px solid var(--color-black);
				height: 8px;

				&.active {
					background-color: var(--color-green);
				}
			}
		}
	}
</style>
