export function throwErrorIfNotString(val: any) {
  if (typeof val !== 'string') {
    throw new Error('val must be typed string')
  }
}
