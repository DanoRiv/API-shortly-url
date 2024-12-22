import urlModel from '../models/url.model.js';

const urlRepository = {

  async findUrlOrShortCode(url, shortCode) {
    return await urlModel.findOne({
      $or: [
        {originalUrl: url},
        {shortCode: shortCode}
      ]
    });
  },

  async saveShortUrl(url, shortCode) {
    const newUrl = new urlModel({originalUrl: url, shortCode: shortCode});
    return newUrl.save();
  }
}

export default urlRepository;