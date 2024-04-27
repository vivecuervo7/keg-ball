import type { Snippet } from 'svelte'

declare global {
declare type PropsWithChildren<Props = { children: Snippet }> = Props &
(Props extends { children: Snippet }
  ? Props
  : { children: Snippet })

  declare type PropsWithOptionalChildren<Props = { children?: Snippet }> = Props &
  (Props extends { children?: Snippet }
    ? Props
    : { children?: Snippet })
}
