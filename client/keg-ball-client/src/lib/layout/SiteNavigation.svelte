<script lang='ts'>
  import { useOpenCloseState } from 'src/hooks/useOpenCloseState.svelte'
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import SiteNavigationLink from 'src/lib/layout/SiteNavigationLink.svelte'
  import { authStore } from 'src/stores/authStore.svelte'
  import { useLocation } from 'svelte-routing'
  import CloseIcon from '../icons/CloseIcon.svelte'
  import MenuIcon from '../icons/MenuIcon.svelte'

  const routes: Record<string, string> = {
    '/': 'Home',
    '/clubs': 'Clubs',
    '/profile': 'Profile',
  }

  const auth = useStoreContext(authStore)
  const location = useLocation()

  let sidebar = useOpenCloseState()
  let activeLink = $derived(routes[$location.pathname])

  $effect (() => {
    location.subscribe(sidebar.close)
  })
</script>

<button class='sidebar-open' onclick={sidebar.open}>
  <MenuIcon />
  <span>{activeLink}</span>
</button>
<button class='overlay' class:open={sidebar.isOpen} onclick={sidebar.close}></button>
<nav class:open={sidebar.isOpen}>
  <SiteNavigationLink to='/'>Home</SiteNavigationLink>
  <SiteNavigationLink to='clubs'>Clubs</SiteNavigationLink>
  {#if auth.signedIn}
    <SiteNavigationLink to='profile'>Profile</SiteNavigationLink>
  {/if}
  <button class='handle' class:open onclick={sidebar.close}>
    <CloseIcon />
  </button>
</nav>

<style lang='postcss'>
  nav {
    display: flex;
    position: relative;
    gap: 1rem;
  }

  .overlay, .handle, .sidebar-open {
    display: none;
  }

  @media (--small-viewport) {
    nav {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      flex-direction: column;
      align-items: start;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      background-color: var(--color-keyline);
      padding: 3rem 3rem 3rem 2rem;
      min-width: min(400px, 70%);

      &.open {
        transform: translateX(0);
      }
    }

    .sidebar-open {
      @mixin nav-link;
      color: var(--color-nav-link-active);
    }

    .overlay {
      @mixin overlay;
      display: block;
      position: absolute;
      inset: 0;

      &.open {
        @mixin overlay-open;
      }
    }

    .handle {
      @mixin button;
      position: absolute;
      top: 0;
      right: 0;
      margin: 0.5rem;
      padding: 1rem;
    }
  }
</style>
