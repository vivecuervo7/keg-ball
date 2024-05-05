<script lang='ts'>
  import { useLocation } from 'svelte-routing'
  import Button from 'src/lib/Button.svelte'
  import Card from 'src/lib/Card.svelte'
  import Page from 'src/lib/page/Page.svelte'

  interface Club {
    name: string
    members: string[]
  }

  const location = useLocation()
  const autofocus = $location.hash === '#search'

  let value = $state('')
  let clubs: Club[] = $state([])

  const onsubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/clubs?name_like=${value}`)
    clubs = await response.json()
  }
</script>

<Page>
  <Card>
    <form {onsubmit}>
      <!-- svelte-ignore a11y-autofocus -->
      <input {autofocus} placeholder='Search' bind:value />
      <Button type='submit'>Search</Button>
    </form>
  </Card>
  <Card>
    <table class='results'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Members</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each clubs as { name, members }}
          <tr>
            <td>{name}</td>
            <td>{members.length}</td>
            <td>
              <Button to='clubs/:id' type='link'>View</Button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
    {#if clubs.length === 0}
      <span class='empty'>
        No results
      </span>
    {/if}
  </Card>
</Page>

<style lang='postcss'>
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: center;
    padding-left: 0.5rem;
    width: 100%;

    @media (--small-viewport) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    input {
      transition: border 0.15s;
      outline: none;
      border: none;
      border-bottom: solid 1px var(--color-input-border);
      background-color: inherit;
      padding: 0 0 0.25rem;
      height: min-content;
      caret-color: var(--color-secondary);
    }
  }

  table {
    width: 100%;

    th {
      padding-bottom: 1rem;
      text-align: left;

      &:first-child {
        width: 60%;
      }
    }
  }

  .empty {
    margin: 1rem auto 2rem;
  }
</style>
