<script lang="ts">
let { children }: PropsWithChildren = $props()
</script>

<style lang="postcss">
div {
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}
</style>

<div>
  {@render children()}
</div>
