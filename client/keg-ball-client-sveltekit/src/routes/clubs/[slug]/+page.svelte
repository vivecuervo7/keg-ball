<script lang="ts">
  import Card from '$lib/Card.svelte'

  const { data } = $props()
</script>

<svelte:head>
  <title>{data.name} - Keg Ball</title>
</svelte:head>

<Card>
  <img alt="" src={`https://ui-avatars.com/api/?format=svg&rounded=true&length=1&name=${data.name}`} />
  <header>{data.name}</header>
</Card>

<Card>
  <header>Players</header>
  {#each data.players as player}
    <span>{player.name}</span>
  {/each}
</Card>

<Card>
  <header>Members</header>
  {#each data.members as member}
    <span>{member}</span>
  {/each}
</Card>
