export type StrictOmit<
  Type extends Record<PropertyKey, unknown>,
  Keys extends keyof Type,
> = Type extends ArrayLike<unknown> ? never : Omit<Type, Keys>
