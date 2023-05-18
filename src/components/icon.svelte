<script lang="ts">
	import Github from './Icons/Github.svelte';
	import LinkedIn from './Icons/LinkedIn.svelte';
	import Mail from './Icons/Mail.svelte';
	import Burger from './Icons/Burger.svelte';
	import Code from './Icons/Code.svelte';
	import Rocket from './Icons/Rocket.svelte';
	import ChevronDown from './Icons/ChevronDown.svelte';
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
			name: 'chevron-down',
			svg: ChevronDown
		},
		{
			name: 'rocket',
			svg: Rocket
		}
	];

	let displayIcon = icons.find((e) => e.name === name);
</script>

<svelte:component this={displayIcon?.svg} />
