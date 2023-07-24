export type NullableRecord<T> = { [K in keyof T]?: T[K] | null | undefined }
