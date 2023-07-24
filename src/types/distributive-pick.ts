/**
 * A version of `Pick` that preserves unions composing `T` by applying `Pick` on each union of `T`.
 */
export type DistributivePick<T, K extends keyof T> = T extends unknown
  ? Pick<T, K>
  : never
