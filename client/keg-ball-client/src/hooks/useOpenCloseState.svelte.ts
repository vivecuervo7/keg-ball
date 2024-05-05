export const useOpenCloseState = (initialState = false) => {
  let state = $state(initialState)

  return {
    get isOpen() { return state },
    toggle: () => state = !state,
    open: () => state = true,
    close: () => state = false,
  }
}
