<script lang='ts'>
  import Page from 'src/lib/Page.svelte'
  import LinkButton from '../LinkButton.svelte'
</script>

<Page>
  <div class='layout'>
    <img alt="" src={'src/assets/dismissal.png'} />
    <div class='text'>
      <div>
        <span>404</span>
        <span>Out for a duck!</span>
      </div>
      <span>We couldn't find the page you're looking for.</span>
      <LinkButton to='/'>Go home</LinkButton>
    </div>
  </div>
</Page>

<style lang='postcss'>
  .layout {
    margin: 4rem auto 0;
    max-width: min(75%, 700px);
    display: grid;
    grid-template-columns: 2fr 3fr;
    place-content: center;
    gap: 4rem;

    @media (--small-viewport) {
      grid-template-columns: 1fr;
      grid-template-rows: minmax(auto, 200px) 1fr;
      gap: 1rem;
      text-align: center;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 1rem;
    letter-spacing: 0.01.em;

    @media (--small-viewport) {
      align-items: center;
    }

    span {
      display: block;
      line-height: 1em;
    }

    div {
      @mixin heavy-font;

      span:first-of-type {
        font-size: 6em;

        @media (--medium-viewport) {
          font-size: 4em;
        }

        @media (--small-viewport) {
          font-size: 2em;
        }
      }

      span:last-of-type {
        font-weight: 500;
        font-size: 2.5em;

        @media (--medium-viewport) {
          font-size: 2em;
        }

        @media (--small-viewport) {
          font-size: 1.5em;
        }
      }
    }
  }

  img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
  }
</style>
