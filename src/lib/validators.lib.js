const { NotValidAmountError, AmountMandatoryError, DescriptionMandatoryError } = require("./errors.lib");

const validateAmount = (amount) => {
  if (!amount) {
    throw new AmountMandatoryError();
  }

  if (amount < 0 || isNaN(amount)) {
    throw new NotValidAmountError();
  }
};

const validateDescription = (description) => {
  if (!description) {
    throw new DescriptionMandatoryError();
  }
};

module.exports = {
  validateAmount,
  validateDescription
}