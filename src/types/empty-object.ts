declare const emptyObjectSymbol: unique symbol

/**
 * A strictly empty plain object. The `{}` value.
 *
 * For a discussion on why not to use `Record<keyof any, never>` or `Record<never, never>`, see https://github.com/sindresorhus/type-fest/issues/395
 */
export type EmptyObject = { [emptyObjectSymbol]?: never }
