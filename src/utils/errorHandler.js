const { resStatus } = require("../constants/statusEnum");

class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = resStatus[400];
  }
}
class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = resStatus[404];
  }
}
class ServerErrors extends Error {
  constructor(message) {
    super(message);
    this.status = resStatus[500];
  }
}

module.exports = { ServerErrors, BadRequest, NotFound };
