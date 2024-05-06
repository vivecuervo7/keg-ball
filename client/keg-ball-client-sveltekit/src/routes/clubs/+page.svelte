<script lang="ts">
  import Button from '$lib/Button.svelte'
  import Card from '$lib/Card.svelte'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  interface Club {
    id: string
    name: string
    members: string[]
  }

  let value = $state('')
  let clubs: Club[] = $state([])

  const onsubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    $page.url.searchParams.set('search', value)
    goto(`?${$page.url.searchParams.toString()}`, { replaceState: true, keepFocus: true })
  }

  page.subscribe(async (page) => {
    if (page.url.searchParams.has('search')) {
      const search = page.url.searchParams.get('search')
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/clubs?name_like=${search}`)
      clubs = await response.json()
    }
  })
</script>

<svelte:head>
  <title>Clubs - Keg Ball</title>
</svelte:head>

<Card>
  <form {onsubmit}>
    <input type="text" placeholder="Search for clubs" bind:value />
    <div>
      <div>
        <Button>Create a club</Button>
        <Button>Join by code</Button>
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
        <th>Members</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each clubs as { id, name, members }}
        <tr>
          <td>{name}</td>
          <td>{members.length}</td>
          <td>
            <Button href={`/clubs/${id}`}>View</Button>
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
  }
</style>
