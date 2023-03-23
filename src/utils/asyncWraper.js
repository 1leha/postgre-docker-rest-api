const { ServerErrors } = require("./errorHandler");

exports.asyncWraper = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    console.log("error :>> ", error);
    // res.status(500).json({ msg: new ServerErrors(error).message });
  }
};
