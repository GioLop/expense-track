const { ERROR } = require("./messages.lib");

class DoesNotExistError extends Error {
  constructor({ message = ERROR.DOES_NOT_EXIST, id }) {
    super(`${message} ${id}`);
    this.name = 'ExpenseDoesNotExist';
  }
}

class NotValidAmountError extends Error {
  constructor(message = ERROR.NOT_VALID_AMOUNT) {
    super(message);
    this.name = 'NotValidAmount';
  }
}

class AmountMandatoryError extends Error {
  constructor(message = ERROR.AMOUNT_MANDATORY) {
    super(message);
    this.name = 'AmountMandatoryError';
  }
}

class DescriptionMandatoryError extends Error {
  constructor(message = ERROR.DESCRIPTION_MANDATORY) {
    super(message);
    this.name = 'DescriptionMandatoryError';
  }
}

module.exports = {
  DoesNotExistError,
  NotValidAmountError,
  AmountMandatoryError,
  DescriptionMandatoryError
}