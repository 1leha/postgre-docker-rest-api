const express = require("express");
const controller = require("../controllers/userControllers");
const middleware = require("../middlewares/userMiddlewares");
const router = express.Router();

// Start index page
router.get("/", controller.startIndex);

// Get All users and get user by role: ?role=admin or ?role=user
router.get("/users", controller.getAllUsers);

// Створити запрос на оновлення одного користувача,
//його основних властивостей: username, email, firstName, lastName, state, role
router
  .get("/users/:id", controller.getUserById)
  .patch("/users/:id", middleware.updateUserValidation, controller.updateUser)

  // Створити запрос на видалення користувача
  .delete("/users/:id", controller.deleteUser);

// Створити запрос на додавання користувача та його основних якостей : username, email, firstName, lastName, state, role
router.post("/users", middleware.createUserValidation, controller.createUser);

module.exports = router;
