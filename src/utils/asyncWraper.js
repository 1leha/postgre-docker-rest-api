const { resStatus } = require("../constants/statusEnum");
const { ServerErrors } = require("./errorHandler");

exports.asyncWraper = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    res.status(resStatus[500]).json({ msg: new ServerErrors(error).message });
  }
};
