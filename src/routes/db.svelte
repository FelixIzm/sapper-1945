<script>
	import Info from './Info_FX.svelte';
	import { onMount } from "svelte";

	let data = [];
	onMount(async function() {
		//const response = await fetch("https://cors-anywhere.herokuapp.com/https://api-1945.herokuapp.com/");
		const response = await fetch("https://fastify-1945.herokuapp.com/users/fdgdfgdf");
		const json = await response.json();
		data = json;
	});

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'невероятно',
		website: 'https://svelte.dev'
	};
</script>

<svelte:head>
	<title>DataBase</title>
</svelte:head>



<h1>DataBase this site</h1>

<p>DataBase this.</p>

<Info {...pkg}/>
