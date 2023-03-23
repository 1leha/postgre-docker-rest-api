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

// Клиентские ошибки 400 - 499
//   400: Bad Request
//   401: Unauthorized
//   403: Forbidden
//   404: Not Found

// Серверные ошибки 500 - 599
//   500: Internal Server Error
//   501: Not Implemented
//   502: Bad Gateway
//   503: Service Unavailable
//   504: Gateway Timeout
