<script lang='ts'>
  import { Route } from 'svelte-routing'
  import ProtectedRoute from './ProtectedRoute.svelte'
  import Forbidden from './routes/Forbidden.svelte'
  import NotFound from './routes/NotFound.svelte'
  import Unauthorized from './routes/Unauthorized.svelte'
  import Profile from './routes/Profile.svelte'
  import Home from './routes/Home.svelte'
</script>

<!-- Public routes -->
<Route path='/'>
  <Home />
</Route>

<!-- Protected routes -->
<ProtectedRoute path='profile'>
  <Profile />
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
