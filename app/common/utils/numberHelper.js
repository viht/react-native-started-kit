function setFormatCostNumber(numberValue) {
  return Number.isNaN(numberValue)
    ? null : parseFloat(Math.round(numberValue * 100) / 100).toFixed(2);
}

const NumberHelper = {
  setFormatCostNumber,
};

export default NumberHelper;
