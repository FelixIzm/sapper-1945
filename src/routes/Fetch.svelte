﻿<script>
  import { onMount } from "svelte";
  let data = [];
  onMount(async function() {
    //const response = await fetch("https://cors-anywhere.herokuapp.com/https://api-1945.herokuapp.com/");
    const response = await fetch("https://fastify-1945.herokuapp.com/users/fdgdfgdf");
    const json = await response.json();
    data = json;
    console.log(data);
  });
</script>