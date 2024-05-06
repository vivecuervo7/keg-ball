<script lang="ts">
  import { navigating } from '$app/stores'
</script>

<div class="overlay" class:navigating={$navigating}>
  <div class="spinner">
    {@render square('top-left')}
    {@render square('top-right')}
    {@render square('bottom-left')}
    {@render square('bottom-right')}
  </div>
</div>

{#snippet square(position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left')}
  <svg
    class="square"
    class:bottom-left={position === 'bottom-left'}
    class:bottom-right={position === 'bottom-right'}
    class:top-right={position === 'top-right'}
    viewBox="0 0 8 8"
  >
    <rect fill="currentColor" height="6.83927" rx="1" width="6.83927" x="0.688965" y="0.403992" />
  </svg>
{/snippet}

<style lang="postcss">
  .overlay {
    @mixin overlay;
    position: fixed;
    inset: 0;

    &.navigating {
      @mixin overlay-open;
    }
  }

  .spinner {
    display: grid;
    position: fixed;
    inset: 0;
    grid-template-columns: repeat(2, clamp(30px, 8vw, 50px));
    place-content: center;
  }

  .square {
    width: 100%;
    height: auto;
    animation: ease-in 2s infinite activate-square;
    color: var(--color-secondary);
  }

  .top-right {
    animation-delay: 0.5s;
  }

  .bottom-right {
    animation-delay: 1s;
  }

  .bottom-left {
    animation-delay: 1.5s;
  }

  @keyframes activate-square {
    0% {
      color: var(--color-secondary);
    }

    10% {
      color: var(--color-primary);
    }

    20% {
      color: var(--color-primary);
    }

    30% {
      color: var(--color-secondary);
    }

    100% {
      color: var(--color-secondary);
    }
  }
</style>
