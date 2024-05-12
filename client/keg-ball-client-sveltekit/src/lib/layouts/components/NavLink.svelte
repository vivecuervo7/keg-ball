<script lang="ts">
import { page } from '$app/stores'

const { href, children }: PropsWithChildren<Props> = $props()
interface Props {
  href: string
}

let active = $derived($page.url.pathname.split('/')[1] === href.replace('/', ''))
</script>

<style lang="postcss">
a {
  @mixin nav-link;
}
</style>

<a {href} class:active>
  {@render children()}
</a>
