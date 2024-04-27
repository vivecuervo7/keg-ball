<script lang='ts'>
  import { useDarkLightModeImage } from 'src/hooks/useDarkLightModeImage.svelte'

  const logo = useDarkLightModeImage('src/assets/logo-dark.svg', 'src/assets/logo.svg')
</script>

<a href='/'>
  <img alt="" src={logo.value} />
  <div>
    <span>Keg Ball</span>
    <span>Fantasy Club Cricket</span>
  </div>
</a>

<style lang='postcss'>
  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  img {
    margin-right: 2rem;
    height: 6rem;

    @media (--medium-viewport) {
      margin-right: 1.5rem;
      height: 4.5rem;
    }

    @media (--small-viewport) {
      margin-right: 1rem;
      height: 3rem;
    }
  }

  span {
    @mixin heavy-font;
    display: block;
    letter-spacing: 0.2rem;

    &:first-child {
      line-height: 1em;
      color: var(--color-primary);
      font-size: 4rem;
      font-weight: 900;

      @media (--medium-viewport) {
        font-size: 3rem;
      }

      @media (--small-viewport) {
        font-size: 2.5rem;
      }
    }

    &:last-child {
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
  }
</style>
