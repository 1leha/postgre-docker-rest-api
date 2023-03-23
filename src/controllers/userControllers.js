const { Pool } = require("pg");
const { dbConfig } = require("../../config");

const db = new Pool(dbConfig);

const path = require("path");
const { sqlQuery } = require("../constants/sqlQueries");
const { asyncWraper } = require("../utils/asyncWraper");
const { resStatus } = require("../constants/statusEnum");
const { NotFound } = require("../utils/errorHandler");
const { resStatusMsg } = require("../constants/messagesEnum");

exports.startIndex = (req, res) => {
  const indexPath = path.resolve("index.html");

  res.sendFile(indexPath);
};

exports.getAllUsers = asyncWraper(async (req, res) => {
  const role = req.query.role;

  const usersQuery = role ? sqlQuery.getAllUsersByRole : sqlQuery.getAllUsers;
  const queryParam = role ? [role] : [];

  const users = await db.query(usersQuery, queryParam);

  if (users.rows.length === 0) {
    throw new NotFound(resStatusMsg.notFound).message;
  }

  res.status(resStatus[200]).json(users.rows);
});

exports.getUserById = asyncWraper(async (req, res) => {
  const id = req.params.id;

  const user = await db.query(sqlQuery.getUserById, [id]);

  if (user.rows.length === 0) {
    throw new NotFound(resStatusMsg.notFound).message;
  }

  res.status(resStatus[200]).json({ id, ...user.rows[0] });
});

exports.updateUser = asyncWraper(async (req, res) => {
  const id = req.params.id;
  const { username, email, role, firstname, lastname, state } = req.body;

  // Get user to update
  const user = await db.query(sqlQuery.getUserById, [id]);

  // New user Object without NULL fields
  const newUserData = {
    username: username || user.rows[0].username,
    email: email || user.rows[0].email,
    role: role || user.rows[0].role,
    firstname: firstname || user.rows[0].firstname,
    lastname: lastname || user.rows[0].lastname,
    state: state || user.rows[0].state,
  };

  const updateProfile = await db.query(sqlQuery.updateProfile, [
    newUserData.firstname,
    newUserData.lastname,
    newUserData.state,
    id,
  ]);
  const updateUser = await db.query(
    sqlQuery.updateUser,

    [newUserData.username, newUserData.email, newUserData.role, id]
  );

  const updatedUserData = {
    ...updateProfile.rows[0],
    ...updateUser.rows[0],
  };

  res.status(resStatus[200]).json({ msg: updatedUserData });
});

exports.deleteUser = asyncWraper(async (req, res) => {
  const id = req.params.id;
  const { rowCount } = await db.query(sqlQuery.delereUser, [id]);
  if (!rowCount) {
    throw new NotFound(resStatusMsg.notFound).message;
  }

  res.status(resStatus[204]).end();
});

exports.createUser = asyncWraper(async (req, res) => {
  const { username, email, role, firstname, lastname, state } = req.body;

  const newUserProfile = await db.query(sqlQuery.insertIntoProfiles, [
    firstname,
    lastname,
    state,
  ]);
  const newUser = await db.query(
    sqlQuery.insertIntoUsers,

    [username, email, role, newUserProfile.rows[0].id]
  );

  const newUserData = {
    ...newUserProfile.rows[0],
    ...newUser.rows[0],
  };

  res.status(resStatus[201]).json({ msg: newUserData });
});
