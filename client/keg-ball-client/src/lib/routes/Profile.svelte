<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import { userStore } from 'src/stores/userStore.svelte'
  import Card from '../Card.svelte'
  import Page from '../page/Page.svelte'

  const user = useStoreContext(userStore)
</script>

<Page>
  <Card>
    <img alt='' src={`https://ui-avatars.com/api/?format=svg&rounded=true&length=1&name=${user.username || user.email}`} />
    <span class:bold={user.username}>{user.username ?? ''}</span>
    <span>{user.email}</span>
  </Card>
</Page>

<style lang='postcss'>
  .bold {
    font-weight: bold;
  }

  img {
    margin-bottom: 0.5rem;
    max-width: 200px;
  }
</style>
