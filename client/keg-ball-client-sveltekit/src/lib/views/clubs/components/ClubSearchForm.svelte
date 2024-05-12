<script lang="ts">
import Button from '$lib/components/Button.svelte'
import Card from '$lib/components/Card.svelte'

let { value = $bindable(), onsubmit }: Props = $props()
interface Props {
  value: string
  onsubmit: (event: SubmitEvent) => void
}
</script>

<style lang="postcss">
@import './ClubSearchForm.css';
</style>

<Card>
  <form {onsubmit}>
    <input type="text" placeholder="Search for clubs" bind:value />
    <div>
      <div>
        <Button onclick={() => {}}>Create a club</Button>
        <Button onclick={() => {}}>Join by code</Button>
      </div>
      <Button type="submit">Search</Button>
    </div>
  </form>
</Card>
