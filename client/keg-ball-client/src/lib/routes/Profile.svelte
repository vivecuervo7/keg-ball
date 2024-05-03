<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import Page from '../page/Page.svelte'
  import { user } from 'src/stores/user.svelte'
  import Card from '../Card.svelte'

  const _user = useStoreContext(user)
</script>

<Page>
  <Card>
    <img alt='' src={`https://ui-avatars.com/api/?format=svg&rounded=true&length=1&name=${_user.user?.username || _user.user?.email}`} />
    <span class='bold'>{_user.user?.username ?? 'Tin man'}</span>
    <span>{_user.user?.email}</span>
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
