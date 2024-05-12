<script lang="ts">
import Button from '$lib/components/Button.svelte'
import Card from '$lib/components/Card.svelte'
</script>

<Card>
  <header>Clubs</header>
  <span>You haven't joined any clubs yet</span>
  <Button type="link" href="/clubs">Find your club</Button>
</Card>

<div class="bar">
  <span class="foo">TEST</span>
</div>

<Card>
  <header>Profile</header>
  <span>Give yourself a nickname and an avatar</span>
  <Button type="link" href="/profile">Edit your profile</Button>
</Card>
