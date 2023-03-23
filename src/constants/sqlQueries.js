exports.sqlQuery = {
  getAllUsers:
    "SELECT * FROM users, profiles WHERE profiles.id=users.profileid",
  getAllUsersByRole:
    "SELECT * FROM users, profiles WHERE profiles.id=users.profileid AND users.role=$1",
  getUserById:
    "SELECT username, email, role, firstname, lastname, state  FROM users, profiles WHERE profiles.id=users.profileid AND users.id=$1",
  insertIntoProfiles:
    "INSERT INTO profiles (firstname, lastname, state ) VALUES ($1, $2, $3) RETURNING *;",
  insertIntoUsers:
    "INSERT INTO users (username, email, role, profileId ) VALUES ($1, $2, $3, $4) RETURNING username, email, role;",
  updateProfile:
    "UPDATE profiles set firstname = $1, lastname = $2, state = $3 WHERE id=$4 RETURNING *",
  updateUser:
    "UPDATE users set username = $1, email = $2, role = $3 WHERE id=$4 RETURNING username, email, role",
  delereUser: "DELETE FROM profiles WHERE id=$1",
};
