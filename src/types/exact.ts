/**
 * A type that does not allow extra properties.
 *
 * @example
 * ```
 * type OnlyAcceptName = {name: string};
 *
 * function onlyAcceptName<T extends Exact<OnlyAcceptName, T>>(args: T) {}
 * ```
 */
export type Exact<Type, Shape> = Type extends Shape
  ? Exclude<keyof Type, keyof Shape> extends never
    ? Type
    : never
  : never
