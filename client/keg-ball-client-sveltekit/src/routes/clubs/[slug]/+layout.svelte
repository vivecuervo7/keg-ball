<script lang="ts">
  import { afterNavigate, goto } from '$app/navigation'

  const { children } = $props()
  let previousPage = $state('')

  afterNavigate(({ from }) => {
    previousPage = from?.url.toString() ?? previousPage
  })
</script>

<button onclick={() => goto(previousPage, { replaceState: true })}>Back to search results</button>
{@render children()}
