<script lang='ts'>
  import Button from 'src/lib/Button.svelte'
  import Page from 'src/lib/page/Page.svelte'

  interface Props {
    code: string
    title: string
    message: string
  }

  const { code, title, message }: Props = $props()
</script>

<Page>
  <div class='layout'>
    <img alt="" src={'src/assets/dismissal.png'} />
    <div class='text'>
      <div>
        <span>{code}</span>
        <span>{title}</span>
      </div>
      <span>{message}</span>
      <Button to='/'>Go home</Button>
    </div>
  </div>
</Page>

<style lang='postcss'>
  .layout {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 4rem;
    place-content: center;
    margin: auto;
    max-width: min(75%, 700px);
    height: 100%;

    @media (--small-viewport) {
      grid-template-rows: minmax(auto, 200px) 1fr;
      grid-template-columns: 1fr;
      gap: 1rem;
      text-align: center;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    justify-content: center;
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
        font-size: 2.5em;
        font-weight: 500;

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
