<script lang="ts">
import Clubs from '$lib/views/clubs/Clubs.svelte'
const { data } = $props()
</script>

<svelte:head>
  <title>Clubs - Keg Ball</title>
</svelte:head>

<Clubs clubs={data.clubs} />
