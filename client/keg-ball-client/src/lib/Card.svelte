<script lang='ts'>
  const { children }: PropsWithChildren = $props()
</script>

<div>
  {@render children()}
</div>

<style lang='postcss'>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    place-items: center center;
    margin: auto;
    margin-top: 2rem;
    border-radius: 24px;
    box-shadow: 4px 4px 8px rgb(0 0 0 / 0.15);
    background-color: var(--color-card-background);
    padding: 1.5rem;
    max-width: 1200px;

    @media (--small-viewport) {
      margin-top: 1.5rem;
    }
  }
</style>
