<script lang="ts">
	import Github from '../components/Icons/Github.svelte';
	import LinkedIn from '../components/Icons/LinkedIn.svelte';
	import Mail from '../components/Icons/Mail.svelte';
	import Burger from './Icons/Burger.svelte';
	import Chevron from './Icons/Chevron.svelte';
	import Code from './Icons/Code.svelte';
	import Rocket from './Icons/Rocket.svelte';
	export let name: string;

	let icons = [
		{
			name: 'github',
			svg: Github
		},
		{
			name: 'mail',
			svg: Mail
		},
		{
			name: 'burger',
			svg: Burger
		},
		{
			name: 'linkedin',
			svg: LinkedIn
		},
		{
			name: 'code',
			svg: Code
		},
		{
			name: 'chevron',
			svg: Chevron
		},
		{
			name: 'rocket',
			svg: Rocket
		}
	];

	let displayIcon = icons.find((e) => e.name === name);
</script>

<svelte:component this={displayIcon?.svg} />
