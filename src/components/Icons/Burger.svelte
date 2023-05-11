<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	let open = false;
	let onClick = (): void => {
		open = !open;
	};

	let ariaLabel = 'toggle menu';
	let width: string | number = 50;

	const flyWithButton = (node, { duration, x, easing }) => {
		const style = getComputedStyle(node);
		const normalFly = fly(node, { duration, x });
		const initialTransform = style.transform === 'none' ? '' : style.transform;
		const button = document.getElementsByTagName('button')[0];

		button.style.transform = initialTransform;
		return normalFly;
	};
</script>

<button
	class="transition-transform ease-in-out
        duration-300"
	on:click={onClick}
	aria-expanded={open}
	aria-label={ariaLabel}
>
	<svg class:open viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" {width}>
		<path
			class="top"
			d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
		/>
		<path class="middle" d="m 30,50 h 40" />
		<path
			class="bottom"
			d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>

{#if open}
	<div transition:flyWithButton={{ duration: 300, x: 50, easing: cubicInOut }}>
		<slot
			class="px-8 py-2 absolute translate-x-full transition-transform
      ease-in-out duration-300"
		/>
	</div>
{/if}

<style>
	:root {
		--transition-duration: 400ms;
	}

	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	svg {
		transition: transform var(--transition-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.open {
		transform: rotate(45deg);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}
</style>
