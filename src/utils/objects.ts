export const getPath = (object: Record<string, unknown>, propName: string): string[] => {
  const path: string[] = []
  const iter: any = (o: Record<string, unknown>, p: string[]) => {
    if (typeof o === 'object') {
      if (o.hasOwnProperty(propName)) {
        path.push([...p, propName].join('.'))
      }
      return Object.keys(o).some((k) => iter(o[k], [...p, k]))
    }
  }

  iter(object, [])
  return path
}

export const objectKeysToLowerCase = (obj: { [key: string]: any }): { [key: string]: any } => {
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(objectKeysToLowerCase)
  return Object.keys(obj).reduce(function (newObj: any, key: any) {
    const val = obj[key]
    const newVal = typeof val === 'object' && val !== null ? objectKeysToLowerCase(val) : val
    newObj[key.toLowerCase()] = newVal
    return newObj
  }, {})
}
