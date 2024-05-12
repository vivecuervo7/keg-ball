<script lang="ts">
import { goto } from '$app/navigation'
import { page } from '$app/stores'
import type { Club } from '../../../models'
import ClubSearchForm from './components/ClubSearchForm.svelte'
import ClubSearchResults from './components/ClubSearchResults.svelte'

const { clubs }: Props = $props()
interface Props {
  clubs: Club[]
}

let search = $state($page.url.searchParams.get('search') ?? '')

const onsubmit = async (event: SubmitEvent) => {
  event.preventDefault()
  $page.url.searchParams.set('search', search)
  goto(`?${$page.url.searchParams.toString()}`, { replaceState: true, keepFocus: true, invalidateAll: true })
}
</script>

<ClubSearchForm bind:value={search} {onsubmit} />
<ClubSearchResults {clubs} />
