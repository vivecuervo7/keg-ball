<script lang='ts'>
  import Button from '../Button.svelte'
  import Card from '../Card.svelte'
  import Page from '../page/Page.svelte'
</script>

<Page>
  <Card>
    <h1>Clubs</h1>
    <span>You haven't joined any clubs yet</span>
    <div>
      <Button to='clubs#search' type='link'>Search for an existing club</Button>
      <span>or</span>
      <Button onclick={() => window.alert('Not implemented')}>Create a new club</Button>
    </div>
  </Card>
</Page>

<style lang='postcss'>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    margin-top: 1rem;
  }
  </style>
