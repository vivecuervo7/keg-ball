const mediaQuery = '(prefers-color-scheme: dark)'

export const theme = () => {
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
    get value() {
      return darkMode ? 'dark' : 'light'
    },
  }
}
