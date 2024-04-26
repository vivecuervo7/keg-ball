import { getContext, setContext } from 'svelte'
import hash from 'object-hash'

/**
 * Gets the context for a given key, initializing the context if it doesn't already exist.
 * @param init The initialization function for the store.
 * @param key The key to use for the context. If not provided, a hash of the init function will be used.
 */
export const useStoreContext = <T>(init: () => T | T, key?: string) => {
  key ??= hash(init)

  const existingContext = getContext<T>(key)

  if (existingContext) {
    console.debug('Using existing context for key:', key)
    return existingContext
  }

  return createStoreContext(init, key)
}

/**
 * Explicitly creates a new context scope for a given key.
 * @param init The initialization function for the store.
 * @param key The key to use for the context. If not provided, a hash of the init function will be used.
 */
export const createStoreContext = <T>(init: () => T | T, key?: string) => {
  key ??= hash(init)

  console.debug('Creating new context scope for key:', key)
  return setContext(key, init())
}
