<script lang="ts">
import { goto } from '$app/navigation'
import { page } from '$app/stores'
import Button from '$lib/components/Button.svelte'
import Card from '$lib/components/Card.svelte'
import type { Club } from '../../../models'

interface Props {
  clubs: Club[]
}

const { clubs }: Props = $props()

let search = $state($page.url.searchParams.get('search') ?? '')

const onsubmit = async (event: SubmitEvent) => {
  event.preventDefault()
  $page.url.searchParams.set('search', search)
  goto(`?${$page.url.searchParams.toString()}`, { replaceState: true, keepFocus: true, invalidateAll: true })
}
</script>

<Card>
  <form {onsubmit}>
    <input type="text" placeholder="Search for clubs" bind:value={search} />
    <div>
      <div>
        <Button onclick={() => {}}>Create a club</Button>
        <Button onclick={() => {}}>Join by code</Button>
      </div>
      <Button type="submit">Search</Button>
    </div>
  </form>
</Card>
<Card>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {#each clubs as { id, name, members }}
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

<style lang="postcss">
@import './Clubs.css';
</style>
