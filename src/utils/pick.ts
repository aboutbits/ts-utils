import { DistributivePick } from '../types'

export function pick<
  T extends Record<PropertyKey, unknown>,
  Keys extends (keyof T)[],
>(obj: T, keys: Keys) {
  const result = {} as T
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key]
    }
  })
  return result as DistributivePick<T, Keys[number]>
}
