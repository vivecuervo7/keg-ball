import { theme } from 'src/stores/theme.svelte'
import { useStoreContext } from './useStoreContext.svelte'

/**
 * Returns a dark or light image source based on the current theme.
 */
export const useDarkLightModeImage = (darkImageSrc: string, lightImageSrc: string) => {
  const _theme = useStoreContext(theme)
  const value = $derived(_theme.value === 'dark' ? darkImageSrc : lightImageSrc)

  return {
    get value() { return value },
  }
}
