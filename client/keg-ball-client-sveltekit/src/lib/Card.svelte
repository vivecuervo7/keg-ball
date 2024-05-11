<script lang="ts">
  const { children }: PropsWithChildren = $props()
</script>

<div>
  {@render children()}
</div>

<style lang="postcss">
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    place-items: center center;
    background-color: var(--card-background);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    max-width: 1200px;
    width: 100%;
    box-shadow: 4px 4px 8px var(--shadow-light);
    margin: 2rem auto 0;

    :global(header) {
      font-weight: bold;
    }
  }
</style>
