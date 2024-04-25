<script lang='ts'>
  import logoLight from 'src/assets/logo.svg'
  import logoDark from 'src/assets/logo-dark.svg'
  import { useDarkLightModeImage } from 'src/hooks/useDarkLightModeImage.svelte'

  const logo = useDarkLightModeImage(logoDark, logoLight)
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
    letter-spacing: 0.2rem;
  }

  span:first-of-type {
    display: block;
    color: var(--color-primary);
    font-family: 'Tilt Warp Variable', system-ui, sans-serif;
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.2em;

    @media (--medium-viewport) {
      font-size: 2.5rem;
    }

    @media (--small-viewport) {
      font-size: 2rem;
      line-height: 1em;
    }
  }

  span:last-of-type {
    color: var(--color-secondary);
    font-family: 'Bakbak One', system-ui, sans-serif;
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
