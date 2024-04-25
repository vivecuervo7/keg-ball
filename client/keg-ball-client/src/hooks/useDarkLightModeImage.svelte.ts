import { useTheme } from './useTheme.svelte'

export const useDarkLightModeImage = (darkImageSrc: string, lightImageSrc: string) => {
  const theme = useTheme()
  const value = $derived(theme.value === 'dark' ? darkImageSrc : lightImageSrc)

  return {
    get value() { return value },
  }
}
