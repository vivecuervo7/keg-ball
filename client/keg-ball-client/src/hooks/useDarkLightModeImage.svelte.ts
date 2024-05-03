import { themeStore } from 'src/stores/themeStore.svelte'
import { useStoreContext } from './useStoreContext.svelte'

/**
 * Returns a dark or light image source based on the current theme.
 */
export const useDarkLightModeImage = (darkImageSrc: string, lightImageSrc: string) => {
  const theme = useStoreContext(themeStore)
  const value = $derived(theme.isDarkMode ? darkImageSrc : lightImageSrc)

  return {
    get value() { return value },
  }
}
