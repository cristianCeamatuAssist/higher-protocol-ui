export const getTenantFromHost = (host: string) => {
  const hostArr = host.split('.')

  // if subdomain
  if (hostArr.length > 2) {
    return hostArr[0]
  } else {
    return null
  }
}
