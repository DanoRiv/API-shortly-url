const normalizeUrl = (url) => {
  try {
    const hasProtocol = url.includes('http://') || url.includes('https://')
    const normalizedUrl = hasProtocol ? url : `https://${url}`

    const parsedUrl = new URL(normalizedUrl)

    return parsedUrl.href
  } catch (error) {
    throw new Error(`Invalid URL format: ${error.message}`)
  }
}

export default normalizeUrl