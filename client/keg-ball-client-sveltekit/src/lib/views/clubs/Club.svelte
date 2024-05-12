<script lang="ts">
import Card from '$lib/components/Card.svelte'
import type { Club } from '../../../models'

interface Props {
  club: Club
}

const { club }: Props = $props()
</script>

<Card>
  <img alt="" src={`https://ui-avatars.com/api/?format=svg&rounded=true&length=1&name=${club.name}`} />
  <header>{club.name}</header>
</Card>

<Card>
  <header>Players</header>
  {#each club.players as player}
    <span>{player.name}</span>
  {/each}
</Card>

<Card>
  <header>Members</header>
  {#each club.members as member}
    <span>{member}</span>
  {/each}
</Card>
