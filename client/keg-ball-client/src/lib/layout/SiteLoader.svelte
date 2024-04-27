<script lang='ts'>
  import Square from 'src/lib/icons/Square.svelte'

  interface Props {
    loading?: boolean
  }

  let { loading = true }: Props = $props()
</script>

<div class='overlay' class:loading>
  <div class='spinner'>
    <Square className='square' />
    <Square className='square top-right' />
    <Square className='square bottom-left' />
    <Square className='square bottom-right' />
  </div>
</div>

<style lang='postcss'>
  .overlay {
    position: fixed;
    inset: 0;
    transition: visibility 0.3s 0s, opacity 0.3s;
    visibility: hidden;
    opacity: 0;
    background-color: rgb(255 255 255 / 0.85);

    @media (--dark-mode) {
      background-color: rgb(30 30 30 / 0.85);
    }

    &.loading {
      visibility: visible;
      opacity: 1;
    }
  }

  .spinner {
    display: grid;
    position: fixed;
    inset: 0;
    grid-template-columns: repeat(2, clamp(30px,8vw, 50px));
    place-content: center;

    :global(.square) {
      width: 100%;
      height: auto;
      animation: ease-in 2s infinite activate-square;
      color: var(--color-loading-spinner-inactive);
    }

    :global(.top-right) {
      animation-delay: 0.5s;
    }

    :global(.bottom-right) {
      animation-delay: 1s;
    }

    :global(.bottom-left) {
      animation-delay: 1.5s;
    }

    @keyframes activate-square {
      0% {
        color: var(--color-loading-spinner-inactive);
      }

      10% {
        color: var(--color-loading-spinner-active);
      }

      20% {
        color: var(--color-loading-spinner-active);
      }

      30% {
        color: var(--color-loading-spinner-inactive);
      }

      100% {
        color: var(--color-loading-spinner-inactive);
      }
    }
  }
</style>
