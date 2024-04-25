export const useTheme = () => {
  let darkMode = $state(window.matchMedia('(prefers-color-scheme: dark)').matches)

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      darkMode = event.matches
    })

  return {
    get value() {
      return darkMode ? 'dark' : 'light'
    },
  }
}
