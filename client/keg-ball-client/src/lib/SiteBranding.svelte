<script lang='ts'>
  import { useDarkLightModeImage } from 'src/hooks/useDarkLightModeImage.svelte'

  const logo = useDarkLightModeImage('src/assets/logo-dark.svg', 'src/assets/logo.svg')
</script>

<a href='/'>
  <img alt="" src={logo.value} />
  <div>
    <span class='title'>Keg Ball</span>
    <span class='subtitle'>Fantasy Club Cricket</span>
  </div>
</a>

<style lang='postcss'>
  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  img {
    height: 6rem;
    margin-right: 2rem;

    @media (--medium-viewport) {
      height: 4.5rem;
      margin-right: 1.5rem;
    }

    @media (--small-viewport) {
      height: 3rem;
      margin-right: 1rem;
    }
  }

  span {
    @mixin heavy-font;

    letter-spacing: 0.2rem;
  }

  span:first-of-type {
    display: block;
    color: var(--color-primary);
    font-size: 4rem;
    font-weight: 900;
    line-height: 1em;

    @media (--medium-viewport) {
      font-size: 3rem;
    }

    @media (--small-viewport) {
      font-size: 2.5rem;
      line-height: 1em;
    }
  }

  span:last-of-type {
    color: var(--color-secondary);
    font-size: 2.25rem;
    font-weight: 500;

    @media (--medium-viewport) {
      font-size: 1.5rem;
    }

    @media (--small-viewport) {
      font-size: 1rem;
    }
  }
</style>
