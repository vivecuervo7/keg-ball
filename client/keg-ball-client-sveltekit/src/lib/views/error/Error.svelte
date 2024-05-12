<script lang="ts">
import Button from '$lib/components/Button.svelte'

let { code, title, message }: Props = $props()
interface Props {
  code: string
  title: string
  message: string
}
</script>

<style lang="postcss">
@import './Error.css';
</style>

<div class="root">
  <img alt="" src="/src/assets/dismissal.png" />
  <div>
    <span class="code">{code}</span>
    <span class="title">{title}</span>
    <span>{message}</span>
    <Button class="button" type="link" href="/">Home</Button>
  </div>
</div>
