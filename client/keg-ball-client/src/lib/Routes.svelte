<script lang='ts'>
  import { Route } from 'svelte-routing'
  import Page from './Page.svelte'
  import ProtectedRoute from './ProtectedRoute.svelte'
  import NotFound from './routes/NotFound.svelte'
  import Forbidden from './routes/Forbidden.svelte'
  import Unauthorized from './routes/Unauthorized.svelte'
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
<Route path='unauthorized'>
  <Unauthorized />
</Route>
<Route path='forbidden'>
  <Forbidden />
</Route>
<Route path='not-found'>
  <NotFound />
</Route>
<Route>
  <NotFound />
</Route>
