<script lang="ts">
import '@fontsource-variable/red-hat-display'
import '@fontsource/bakbak-one'
import '../../app.css'
import LoadingOverlay from '$lib/components/LoadingOverlay.svelte'
import NavBar from '$lib/components/NavBar/NavBar.svelte'
import SiteHeader from '$lib/components/SiteHeader.svelte'

let { children }: PropsWithChildren = $props()
</script>

<style lang="postcss">
@import './App.css';
</style>

<SiteHeader />
<main>
  <div>
    <NavBar />
    {@render children()}
  </div>
</main>
<LoadingOverlay />
