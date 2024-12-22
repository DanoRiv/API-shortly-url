import urlRepository from '../repositories/urlRepository.js'

const findUrlOrShortCode = async (url, shortCode) => {
  return await urlRepository.findUrlOrShortCode(url, shortCode)
}

export default findUrlOrShortCode