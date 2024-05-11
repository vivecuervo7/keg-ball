<script lang="ts">
  import Button from '$lib/Button.svelte'
  import Card from '$lib/Card.svelte'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  const { data } = $props()

  let search = $state($page.url.searchParams.get('search') ?? '')

  const onsubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    $page.url.searchParams.set('search', search)
    goto(`?${$page.url.searchParams.toString()}`, { replaceState: true, keepFocus: true, invalidateAll: true })
  }
</script>

<svelte:head>
  <title>Clubs - Keg Ball</title>
</svelte:head>

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
      {#each data.clubs as { id, name, members }}
        <tr>
          <td>{name}</td>
          <td>
            <Button type="link" href={`/clubs/${id}`}>View</Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  {#if data.clubs.length === 0}
    <span class="empty"> No results </span>
  {/if}
</Card>

<style lang="postcss">
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;

    input {
      border-bottom: solid 1px var(--color-keyline);
      padding: 0 0 0.25rem;
      margin: 0 0.5rem;
      caret-color: var(--color-secondary);
    }

    div {
      @mixin responsive flex-direction, row, row, column-reverse;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }

  table {
    width: 100%;

    th {
      padding-bottom: 1rem;
      text-align: left;

      &:first-child {
        width: 70%;
      }
    }

    td:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
