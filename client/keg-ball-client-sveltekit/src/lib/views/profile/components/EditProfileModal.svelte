<script lang="ts">
import Modal from '$lib/components/Modal.svelte'
import TextInput from '$lib/components/TextInput.svelte'
import type { User } from '../../../../models'

let { open, onsubmit, oncancel, user }: Props = $props()
interface Props {
  open: boolean
  onsubmit: (user: User) => void
  oncancel: () => void
  user: User
}

let data = $state(structuredClone($state.snapshot(user)))

const handleSubmit = () => {
  onsubmit($state.snapshot(data))
}

const close = () => {
  data = structuredClone($state.snapshot(user))
  oncancel()
}
</script>

<style lang="postcss">
form {
  display: grid;
  gap: 1rem;
}
</style>

<Modal title="Edit Profile" {open} ondone={handleSubmit} oncancel={close}>
  <form method="dialog">
    <TextInput label="Username" bind:value={data.username} />
    <TextInput label="Email Address" bind:value={data.email} />
    <TextInput label="Image URL" bind:value={data.imageUrl} />
  </form>
</Modal>
