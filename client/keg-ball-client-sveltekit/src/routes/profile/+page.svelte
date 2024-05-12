<script lang="ts">
import Profile from '$lib/views/profile/Profile.svelte'
const { data } = $props()
</script>

<svelte:head>
  <title>Profile - Keg Ball</title>
</svelte:head>

<Profile user={data} />
