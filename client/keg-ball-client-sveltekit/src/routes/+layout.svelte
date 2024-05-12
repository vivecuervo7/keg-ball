<script lang="ts">
import App from '$lib/layouts/App.svelte'
let { children }: PropsWithChildren = $props()
</script>

<App {children} />
