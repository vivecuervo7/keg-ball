<script lang="ts">
import Button from './Button.svelte'
import Card from './Card.svelte'

const { open, ondone, oncancel, title, children }: PropsWithChildren<Props> = $props()
interface Props {
  open: boolean
  ondone: () => void
  oncancel: () => void
  title: string
}

let dialog = $state<HTMLDialogElement>()

$effect(() => {
  open ? dialog?.showModal() : dialog?.close()
})
</script>

<style lang="postcss">
@import './Modal.css';
</style>

<dialog bind:this={dialog} class:open {oncancel}>
  <Card>
    <header>{title}</header>
    <div>
      {@render children()}
    </div>
    <footer>
      <Button onclick={oncancel} style="danger">Cancel</Button>
      <Button onclick={ondone}>Done</Button>
    </footer>
  </Card>
</dialog>
