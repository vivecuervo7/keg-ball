<script lang="ts">
import { navigating } from '$app/stores'
</script>

<style lang="postcss">
@import './LoadingOverlay.css';
</style>

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
