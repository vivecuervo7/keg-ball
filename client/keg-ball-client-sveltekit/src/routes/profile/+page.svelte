<script lang="ts">
  import Card from '$lib/Card.svelte'
</script>

<svelte:head>
  <title>Profile - Keg Ball</title>
</svelte:head>

<Card>
  <img alt="" src={`https://ui-avatars.com/api/?format=svg&rounded=true&length=1&name=user`} />
  <header>Username</header>
  <span>email@example.com</span>
</Card>

<style lang="postcss">
  img {
    margin-bottom: 0.5rem;
    max-width: 200px;
  }
</style>
