
const handleFailedAttempts = () => {
  throw new Error('Max attempts excceded: Failed to generate a unique short code. Please try again');
}

export default { handleFailedAttempts }