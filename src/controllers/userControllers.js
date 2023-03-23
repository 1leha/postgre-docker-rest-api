const path = require("path");
const { resStatus } = require("../constants/statusEnum");
const { asyncWraper } = require("../utils/asyncWraper");

exports.startIndex = (req, res) => {
  const indexPath = path.resolve("index.html");

  res.sendFile(indexPath);
};

exports.getAllUsers = asyncWraper(async (req, res) => {
  res.status(resStatus[200]).json("getAllUsers");
});

exports.updateUser = asyncWraper(async (req, res) => {
  res.status(resStatus[200]).json("updateUser");
});

exports.deleteUser = asyncWraper(async (req, res) => {
  console.log("deleteUser :>> ", "deleteUser");

  res.status(resStatus[204]).end();
});

exports.createUser = asyncWraper(async (req, res, next) => {
  res.status(resStatus[201]).json("createUser");
});
