<script lang="ts">
  import '../styles/typography.css'
  import '@fontsource/bakbak-one'
  import '@fontsource-variable/red-hat-display'
</script>

<header>
  <span>Keg Ball</span>
  <span>Fantasy Club Cricket</span>
</header>
<main>
  <nav>
    <a href="/">Home</a>
    <a href="/clubs">Clubs</a>
    <a href="/profile">Profile</a>
  </nav>
  <slot />
</main>

<style lang="postcss">
  header {
    display: grid;
    grid-template-rows: auto auto;

    span {
      @mixin heavy-font;
      text-transform: uppercase;
      letter-spacing: 0.2rem;

      &:first-child {
        @mixin responsive font-size, 3.5rem, 3rem, 2.5rem;
        line-height: 1em;
        color: var(--color-primary);
        font-weight: 900;
      }

      &:last-child {
        @mixin responsive font-size, 2rem, 1.75rem, 1.5rem;
        color: var(--color-secondary);
        font-weight: 500;
      }
    }
  }

  main {
    @mixin responsive background-size, 700px, 650px, 600px;
    @mixin responsive padding-top, 4rem, 3.5rem, 3rem;
    display: grid;
    grid-template-rows: auto 1fr;
    background-image: url('src/assets/background.svg');
    background-repeat: repeat-x;
  }
</style>
