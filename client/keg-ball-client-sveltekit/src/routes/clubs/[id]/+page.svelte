<script lang="ts">
import Club from '$lib/views/clubs/Club.svelte'
const { data } = $props()
</script>

<svelte:head>
  <title>{data.name} - Keg Ball</title>
</svelte:head>

<Club club={data} />
