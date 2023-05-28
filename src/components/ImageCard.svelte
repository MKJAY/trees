<script lang="ts">
	import type { Image } from '../types/tree-species.type';

	export let image: Image;

	let fullscreenImageIsEnabled = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="image-card clickable"
	class:fullscreen={fullscreenImageIsEnabled}
	on:click={() => (fullscreenImageIsEnabled = !fullscreenImageIsEnabled)}
>
	<span>{image.label}</span>
	<img class="foreground-image" src={image.source} alt={image.label} />
	<img class="background-image" src={image.source} alt={image.label} />
</div>

<style lang="scss">
	.image-card {
		position: relative;
		border-radius: 8px;
		overflow: hidden;

		&.fullscreen {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 999;
			border-radius: unset;

			img {
				width: 100% !important;
				height: 100% !important;
				aspect-ratio: unset !important;
			}
		}

		span {
			position: absolute;
			bottom: 0;
			width: 100%;
			padding: 2px 0;
			background-color: rgba(#000000, 0.64);
			color: var(--color-white);
			text-align: center;
		}

		img {
			width: 256px;
			height: 256px;

			&.foreground-image {
				object-fit: contain;
			}

			&.background-image {
				position: absolute;
				top: 0;
				z-index: -1;
				object-fit: cover;
				filter: blur(12px);
			}
		}
	}
</style>
