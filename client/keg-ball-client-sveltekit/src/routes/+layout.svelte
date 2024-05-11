<script lang="ts">
  import '@fontsource-variable/red-hat-display'
  import '@fontsource/bakbak-one'
  import '../app.css'
  import LoadingOverlay from './LoadingOverlay.svelte'
  import NavLink from './NavLink.svelte'
</script>

<header>
  <img src="/src/assets/logo.svg" alt="Keg Ball" />
  <div>
    <span>Keg Ball</span>
    <span>Fantasy Club Cricket</span>
  </div>
</header>
<main>
  <nav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/clubs">Clubs</NavLink>
    <NavLink href="/profile">Profile</NavLink>
  </nav>
  <div>
    <slot />
  </div>
</main>
<LoadingOverlay />

<style lang="postcss">
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 0 8px var(--shadow-medium);

    img {
      @mixin responsive height, 5rem, 4rem, 3rem;
      margin: auto;
    }

    div {
      display: inline-grid;
      grid-template-rows: auto auto;

      span {
        @mixin heavy-font;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        line-height: 1em;

        &:first-child {
          @mixin responsive font-size, 3.5rem, 3rem, 2.5rem;
          color: var(--color-primary);
          font-weight: 900;
        }

        &:last-child {
          @mixin responsive font-size, 2rem, 1.5rem, 1.25rem;
          color: var(--color-secondary);
          font-weight: 500;
        }
      }
    }
  }

  main {
    @mixin responsive background-size, 700px, 650px, 600px;
    @mixin responsive padding, 5rem 1rem 1rem, 4.5rem 1rem 1rem, 4rem 1rem 1rem;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    background-image: url('/src/assets/background.svg');
    background-repeat: repeat-x;

    > div,
    > nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
    }
  }

  nav {
    display: flex;
    gap: 1em;
  }
</style>
