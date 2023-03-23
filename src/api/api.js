const express = require("express");
const controller = require("../controllers/userControllers");
const middleware = require("../middlewares/userMiddlewares");
const router = express.Router();

// Start index page
router.get("/", controller.startIndex);

// Get All users and get user by role: ?role=admin or ?role=user
router.get("/users", controller.getAllUsers);

// Get, patch, delete user by id
router
  .get("/users/:id", controller.getUserById)
  .patch("/users/:id", middleware.updateUserValidation, controller.updateUser)
  .delete("/users/:id", controller.deleteUser);

// Create user: username, email, firstName, lastName, state, role. Role by default is "user"
router.post("/users", middleware.createUserValidation, controller.createUser);

module.exports = router;
