import createShortUrl from '../services/shortenService.js'

const shortenUrl = async (req, res) => {
  try {
    const { inputUrl } = req.body

    if (!inputUrl) {
      return res
        .status(400)
        .json({ message: 'You need to provide a URL to shorten' })
    }
    const shortUrl = await createShortUrl(inputUrl)

    res
      .status(201)
      .json({ newUrl: shortUrl, message: 'URL shortened successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default shortenUrl
