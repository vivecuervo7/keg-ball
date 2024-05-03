const mediaQuery = '(prefers-color-scheme: dark)'

export const themeStore = () => {
  let darkMode = $state(window.matchMedia(mediaQuery).matches)

  const handleColorSchemeChange = (event: MediaQueryListEvent) => {
    darkMode = event.matches
  }

  window.matchMedia(mediaQuery)
    .addEventListener('change', handleColorSchemeChange)

  $effect(() => {
    return () => {
      window.matchMedia(mediaQuery)
        .removeEventListener('change', handleColorSchemeChange)
    }
  })

  return {
    get isDarkMode() { return darkMode },
    get isLightMode() { return !darkMode },
  }
}
