<script lang="ts">
let { label, value = $bindable() }: Props = $props()
interface Props {
  label: string
  value?: string
}
</script>

<style lang="postcss">
@import './TextInput.css';
</style>

<label>
  <span>{label}</span>
  <input bind:value />
</label>
