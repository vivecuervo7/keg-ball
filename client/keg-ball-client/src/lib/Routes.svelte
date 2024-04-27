<script lang='ts'>
  import { Route } from 'svelte-routing'
  import ProtectedRoute from './ProtectedRoute.svelte'
  import Page from './page/Page.svelte'
  import Forbidden from './routes/Forbidden.svelte'
  import NotFound from './routes/NotFound.svelte'
  import Unauthorized from './routes/Unauthorized.svelte'
</script>

<!-- Public routes -->
<Route path='/'>
  <Page>Home</Page>
</Route>

<!-- Protected routes -->
<ProtectedRoute path='/protected'>
  <Page>Protected route</Page>
</ProtectedRoute>

<!-- Error pages -->
<Route path='unauthorized'>
  <Unauthorized />
</Route>
<Route path='forbidden'>
  <Forbidden />
</Route>
<Route path='not-found'>
  <NotFound />
</Route>

<!-- Fallback route -->
<Route>
  <NotFound />
</Route>
