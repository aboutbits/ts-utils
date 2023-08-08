export type StrictOmit<
  Type,
  Keys extends keyof Type,
> = Type extends ArrayLike<unknown> ? never : Omit<Type, Keys>
