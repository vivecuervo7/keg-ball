<script lang="ts">
import Error from '$lib/views/error/Error.svelte'
import { page } from '$app/stores'

const [title, message] = $derived.by(() => {
  switch ($page.status) {
    case 404:
      return ["We're stumped.", "We couldn't find the page you're looking for."]
    default:
      return ['Six and out!', "Something went wrong, and we're not sure why."]
  }
})
</script>

<Error code={$page.status.toString()} {title} {message} />
