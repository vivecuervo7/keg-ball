<script lang="ts">
import NavLink from './NavBar/NavLink.svelte'
</script>

<style lang="postcss">
nav {
  display: flex;
  gap: 1em;
}
</style>

<nav>
  <NavLink href="/">Home</NavLink>
  <NavLink href="/clubs">Clubs</NavLink>
  <NavLink href="/profile">Profile</NavLink>
</nav>
