<script lang="ts">
  import Button from '$lib/Button.svelte'
  import Card from '$lib/Card.svelte'
</script>

<svelte:head>
  <title>Home - Keg Ball</title>
</svelte:head>

<Card>
  <header>Clubs</header>
  <span>You haven't joined any clubs yet</span>
  <Button type="link" href="/clubs">Find your club</Button>
</Card>

<Card>
  <header>Profile</header>
  <span>Give yourself a nickname and an avatar</span>
  <Button type="link" href="/profile">Edit your profile</Button>
</Card>
