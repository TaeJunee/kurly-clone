const createRandomNumber = () => {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code + '';
}

module.exports = { createRandomNumber }