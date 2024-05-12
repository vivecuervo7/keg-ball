<script lang="ts">
import Modal from '$lib/components/Modal.svelte'
import TextInput from '$lib/components/TextInput.svelte'
import type { User } from '../../../../models'

interface Props {
  open: boolean
  onsubmit: (user: User) => void
  oncancel: () => void
  user: User
}

let { open, onsubmit, oncancel, user }: Props = $props()

let data = $state(structuredClone(user))

const handleSubmit = () => {
  onsubmit($state.snapshot(data))
}

const close = () => {
  data = structuredClone(user)
  oncancel()
}
</script>

<Modal title="Edit Profile" {open} ondone={handleSubmit} oncancel={close}>
  <form onsubmit={handleSubmit}>
    <TextInput label="Username" bind:value={data.username} />
    <TextInput label="Email Address" bind:value={data.email} />
    <TextInput label="Image URL" bind:value={data.imageUrl} />
  </form>
</Modal>

<style lang="postcss">
form {
  display: grid;
  gap: 1rem;
}
</style>
