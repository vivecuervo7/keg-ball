import { mount } from 'svelte'
import App from './App.svelte'
import './app.css'
import '@fontsource-variable/tilt-warp'
import '@fontsource/bakbak-one'

const app = mount(App, ({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: document.getElementById('app')!,
}))

export default app
