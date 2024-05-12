<script lang="ts">
import '@fontsource-variable/red-hat-display'
import '@fontsource/bakbak-one'
import '../../app.css'
import LoadingOverlay from './components/LoadingOverlay.svelte'
import NavBar from './components/NavBar.svelte'
import SiteHeader from './components/SiteHeader.svelte'
import Container from '$lib/components/Container.svelte'

let { children }: PropsWithChildren = $props()
</script>

<style lang="postcss">
@import './App.css';
</style>

<div class="root">
  <SiteHeader />
  <main>
    <Container>
      <NavBar />
    </Container>
    <div class="content">
      <!-- <Container> -->
      <div class="page">
        {@render children()}
      </div>
      <!-- </Container> -->
    </div>
  </main>
</div>
<LoadingOverlay />
