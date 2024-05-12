<script lang="ts">
import Card from '$lib/components/Card.svelte'
import { put } from '../../../api'
import type { User } from '../../../models'
import EditProfileModal from './components/EditProfileModal.svelte'

let { ...props }: Props = $props()
interface Props {
  user: User
}

let dialog = $state<HTMLDialogElement>()
let editing = $state(false)
let user = $state(props.user)

$effect(() => {
  editing ? dialog?.showModal() : dialog?.close()
})

const updateProfile = async (data: User) => {
  user = structuredClone(data)
  editing = false
  await put('/profile', user)
}
</script>

{#if user}
  <Card edit={() => (editing = true)}>
    <img alt="" src={user.imageUrl} />
    <header>{user.username}</header>
    <span>{user.email}</span>
  </Card>

  <EditProfileModal open={editing} onsubmit={updateProfile} oncancel={() => (editing = false)} {user} />
{/if}
