// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  declare type PropsWithChildren<Props = { children: Snippet }> = Props &
    (Props extends { children: Snippet } ? Props : { children: Snippet })

  declare type PropsWithOptionalChildren<Props = { children?: Snippet }> = Props &
    (Props extends { children?: Snippet } ? Props : { children?: Snippet })
}

export {}
