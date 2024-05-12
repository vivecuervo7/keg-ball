<script lang="ts">
import Card from '$lib/components/Card.svelte'
import type { User } from '../../../models'
import EditProfileModal from './components/EditProfileModal.svelte'

let dialog = $state<HTMLDialogElement>()
let editing = $state(false)
let user = $state({
  id: '0',
  username: 'Username',
  email: 'email@example.com',
  imageUrl: 'https://ui-avatars.com/api/?format=svg&rounded=true&length=1&name=user',
})

$effect(() => {
  editing ? dialog?.showModal() : dialog?.close()
})

const updateProfile = (data: User) => {
  user = structuredClone(data)
  editing = false
}
</script>

<Card edit={() => (editing = true)}>
  <img alt="" src={user.imageUrl} />
  <header>{user.username}</header>
  <span>{user.email}</span>
</Card>

<EditProfileModal
  open={editing}
  onsubmit={updateProfile}
  oncancel={() => (editing = false)}
  user={$state.snapshot(user)}
/>
