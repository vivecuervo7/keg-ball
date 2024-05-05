<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import SiteNavigationLink from 'src/lib/layout/SiteNavigationLink.svelte'
  import { authStore } from 'src/stores/authStore.svelte'
  import { useLocation } from 'svelte-routing'
  import CloseIcon from '../icons/CloseIcon.svelte'
  import MenuIcon from '../icons/MenuIcon.svelte'

  const auth = useStoreContext(authStore)
  let open = $state(false)

  $effect (() => {
    const location = useLocation()
    location.subscribe(() => open = false)
  })
</script>

<button class='overlay' class:open onclick={() => open = false}></button>
<nav class:open>
  <SiteNavigationLink to='/'>Home</SiteNavigationLink>
  <SiteNavigationLink to='clubs'>Clubs</SiteNavigationLink>

  {#if auth.signedIn}
    <SiteNavigationLink to='profile'>Profile</SiteNavigationLink>
  {/if}

  <button class='handle' class:open onclick={() => open = !open}>
    {#if open}
      <CloseIcon />
    {:else}
      <MenuIcon />
    {/if}
  </button>
</nav>

<style lang='postcss'>
  nav {
    display: flex;
    position: relative;
    gap: 1rem;
  }

  .overlay, .handle {
    display: none;
  }

  @media (--medium-viewport) {
    nav {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      flex-direction: column;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      background-color: var(--color-keyline);
      padding: 3rem 3rem 3rem 2rem;
      min-width: min(400px, 70%);

      &.open {
        transform: translateX(0);
      }
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
      top: 120px;
      right: 0;
      transform: translateX(100%);
      border-radius: 0 12px 12px 0;
      background-color: var(--color-keyline);
      padding: 1rem 0.5rem;

      &.open {
        background-color: var(--color-keyline);
      }
    }
  }
</style>
