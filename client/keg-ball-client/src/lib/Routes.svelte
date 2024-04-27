<script lang='ts'>
  import { Route } from 'svelte-routing'
  import Page from './Page.svelte'
  import ProtectedRoute from './ProtectedRoute.svelte'
  import NotFound from './routes/NotFound.svelte'
</script>

<Route path='/'>
  <Page>Home</Page>
</Route>
<Route path='/value/:id' let:params>
  <Page>Value: {params.id}</Page>
</Route>
<ProtectedRoute path='/protected'>
  <Page>Protected route</Page>
</ProtectedRoute>
<Route>
  <NotFound />
</Route>
