import {nanoid} from 'nanoid'
import urlRepository from '../repositories/urlRepository.js'
import findUrlOrShortCode from './findService.js'
import handleFailedAttempts from '../utils/errorHandler.js'
import isExistingUrl from '../utils/isExistingUrl.js'
import { validate } from './urlValidationService.js'
import { MAX_ATTEMPTS, BASE_URL } from '../config/constants.js'

const baseUrl = process.env.BASE_URL || BASE_URL

const saveUrl = async (inputUrl) => {
  const longUrl = await validate(inputUrl)
  let attempts = 0

  while (attempts < MAX_ATTEMPTS) {
    let shortCode = nanoid(8)

    const matchingEntity = await findUrlOrShortCode(longUrl, shortCode)

    //Verify existing url
    if (isExistingUrl(matchingEntity, longUrl)) {
      return matchingEntity.shortCode
    }

    if (!matchingEntity) {
      await urlRepository.saveShortUrl(longUrl, shortCode)
      return shortCode
    }

    attempts++
  }
  handleFailedAttempts()
}

const createShortUrl = async (longUrl) => {
  const shortCode = await saveUrl(longUrl)
  return `${baseUrl}/${shortCode}`
}

export default createShortUrl
