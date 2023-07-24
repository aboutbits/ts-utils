/**
 * A version of `Omit` that preserves unions composing `T` by applying `Omit` on each union of `T`.
 */
export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never
