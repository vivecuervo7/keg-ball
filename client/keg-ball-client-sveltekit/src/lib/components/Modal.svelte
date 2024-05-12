<script lang="ts">
import Button from './Button.svelte'
import Card from './Card.svelte'

interface Props {
  open: boolean
  ondone: () => void
  oncancel: () => void
  title: string
}

const { open, ondone, oncancel, title, children }: PropsWithChildren<Props> = $props()

let dialog = $state<HTMLDialogElement>()

$effect(() => {
  open ? dialog?.showModal() : dialog?.close()
})
</script>

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

<style lang="postcss">
dialog {
  @mixin responsive min-width, 40%, 60%, calc(100% - 2rem);
  @mixin responsive min-height, 40%, 60%, calc(100% - 2rem);
  @mixin responsive max-height, 70%, 70%, calc(100% - 2rem);
  background-color: transparent;
  border: none;
  padding: none;

  &::backdrop {
    @mixin overlay;
  }

  &.open::backdrop {
    @mixin overlay-open;
  }

  header {
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1.5rem;
  }
}

.open,
.open::backdrop {
  animation: fade var(--medium-transition) ease-in-out forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
