<script>
  import { onMount } from "svelte";
  let data = [];
  onMount(async function() {
    const response = await fetch("https://academy.valentinog.com/api/link/");
    const json = await response.json();
    data = json;
    console.log('onMount');
  });
</script>