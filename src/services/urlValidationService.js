import isValidDomain from "../utils/isValidDomain.js"
import normalizeUrl from "../utils/normalizeUrl.js"

const urlValidationService = {
  async validate(url){
    const trimmedUrl = url.trim()
  
    if(typeof trimmedUrl !== 'string'){
      throw new Error('Invalid URL format. Please enter a valid URL')
    }
    if(!isValidDomain(trimmedUrl)){
      throw new Error('Invalid URL domain. Please enter a valid URL')
    }
    return normalizeUrl(trimmedUrl)
  }
}

export const { validate } = urlValidationService