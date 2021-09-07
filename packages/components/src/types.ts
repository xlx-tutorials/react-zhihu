/** Copy props from html element */
export type HTMLPropsAs<
  T extends keyof JSX.IntrinsicElements,
  P
> = JSX.IntrinsicElements[T] & P
