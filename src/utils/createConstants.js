function createConstants(...constants) {
  return constants.reduce((output, constant) => {
    output[constant] = constant;
    return output;
  }, {});
}

export default createConstants;
