<script lang="ts">
interface Props {
  label: string
  value?: string
}

let { label, value = $bindable() }: Props = $props()
</script>

<label>
  <span>{label}</span>
  <input bind:value />
</label>

<style lang="postcss">
label > span {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border-bottom: solid 1px var(--color-keyline);
}
</style>
