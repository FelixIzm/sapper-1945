<script>
  import { onMount } from "svelte";
  let data = [];
  onMount(async function() {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api-1945.herokuapp.com/");
    const json = await response.json();
    data = json;
    console.log(data);
  });
</script>