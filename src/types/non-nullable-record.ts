export type NonNullableRecord<T> = {
  [P in keyof T]-?: NonNullable<T[P]>
}
