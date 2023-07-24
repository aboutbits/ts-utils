type FormIncompatibleType = number | boolean | Date | bigint

/**
 * Converts the given type to make it form compatible.
 * E.g. `number` is converted to `string`.
 */
export type FormCompatible<T> = T extends unknown
  ? {
      [P in keyof T]: T[P] extends infer K
        ? K extends Record<PropertyKey, unknown>
          ? FormCompatible<T[P]>
          : K extends FormIncompatibleType
          ? string
          : NonNullable<K>
        : never
    }
  : never
