<script lang="ts">
import Button from './Button.svelte'

const { edit, children }: PropsWithChildren<{ edit?: () => void }> = $props()
</script>

<div class="root">
  {@render children()}
  {#if edit}
    <div>
      <button onclick={edit}
        ><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          ><path
            fill="currentColor"
            d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
          /></svg
        ></button
      >
    </div>
  {/if}
</div>

<style lang="postcss">
.root {
  position: relative;
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

  @mixin global header {
    font-weight: bold;
  }
}

button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--color-keyline);
  transition: color var(--short-transition);

  &:hover {
    color: var(--color-secondary);
  }
}
</style>
