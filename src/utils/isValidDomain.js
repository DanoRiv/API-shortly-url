const isValidDomain = (input) => {
  const domainRegex = /^(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|localhost)$/;
  try {
    const url = new URL(input.includes('http')? input : `https://${input}`);

    return domainRegex.test(url.hostname);
  } catch {
    return false
  }
}

export default isValidDomain