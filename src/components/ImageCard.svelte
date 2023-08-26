<script lang="ts">
	import type { Image } from '../types/tree-species';

	// Props
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
		--blur-size: 12px;
		position: relative;
		width: 256px;
		height: 256px;
		border-radius: 8px;
		overflow: hidden;

		&.fullscreen {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 999;
			width: calc(100% + var(--blur-size));
			height: calc(100% + var(--blur-size));
			margin: calc(var(--blur-size) * -1);
			border-radius: unset;
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
			&.foreground-image {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}

			&.background-image {
				position: absolute;
				top: 0;
				z-index: -1;
				width: calc(100% + var(--blur-size) * 2);
				height: calc(100% + var(--blur-size) * 2);
				object-fit: cover;
				margin: calc(var(--blur-size) * -1);
				filter: blur(var(--blur-size));
			}
		}
	}
</style>
