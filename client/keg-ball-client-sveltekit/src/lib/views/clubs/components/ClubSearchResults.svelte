<script lang="ts">
import Button from '$lib/components/Button.svelte'
import Card from '$lib/components/Card.svelte'
import type { Club } from '../../../../models'

const { clubs }: Props = $props()
interface Props {
  clubs: Club[]
}
</script>

<style lang="postcss">
@import './ClubSearchResults.css';
</style>

<Card>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {#each clubs as { id, name }}
        <tr>
          <td>{name}</td>
          <td>
            <Button type="link" href={`/clubs/${id}`}>View</Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  {#if clubs.length === 0}
    <span class="empty"> No results </span>
  {/if}
</Card>
