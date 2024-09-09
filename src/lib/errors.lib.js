const { ERROR } = require("./messages.lib");

class DoesNotExistError extends Error {
  constructor({ message = ERROR.DOES_NOT_EXIST, id }) {
    super(`${message} ${id}`)
    this.name = 'ExpenseDoesNotExist';
  }
}

module.exports = {
  DoesNotExistError
}