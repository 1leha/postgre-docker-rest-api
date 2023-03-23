const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const router = require("./src/api/api");
const app = express();
const { resStatus } = require("./src/constants/statusEnum");
const { resStatusMsg } = require("./src/constants/messagesEnum");

app.use(express.json());
app.use(cors());
app.use(morgan("short"));

app.use("/", router);

// 404 error handler
app.use((req, res) => {
  res.status(resStatus[404]).json({ message: resStatusMsg.notFound });
});

// server error handler
app.use((err, req, res, next) => {
  console.log("err :>> ", err);
  res.status(err.status || resStatus[500]).json({ message: err.message });
});

module.exports = app;
