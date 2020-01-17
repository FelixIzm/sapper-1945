<script>
	import Info from './Info_FX.svelte';

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
