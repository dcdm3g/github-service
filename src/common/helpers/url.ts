export function url(url: string, query?: Record<string, unknown>) {
  if (!query) {
    return url
  }

  const queryentries = Object.entries(query)

  if (queryentries.length === 0) {
    return url
  }

  const querystring = '?' + queryentries.map((pair) => pair.join('=')).join('&')
  return url + querystring
}
