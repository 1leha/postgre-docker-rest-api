const express = require("express");
const controller = require("../controllers/userControllers");
const router = express.Router();

// Стартова сторінка
router.get("/", controller.startIndex);

// Створити http запрос на отримання всіх користувачів їх профайлів
// middleware.getUserByRole Додати до запросу на отримання користувачів
//можливість отримувати тільки тих користувачів роль яких ми вкажемо в запросі
router.get("/users", controller.getAllUsers);

// Створити запрос на оновлення одного користувача,
//його основних властивостей: username, email, firstName, lastName, state, role
router
  .patch("/users/:id", controller.updateUser)

  // Створити запрос на видалення користувача
  .delete("/users/:id", controller.deleteUser);

// Створити запрос на додавання користувача та його основних якостей : username, email, firstName, lastName, state, role
router.post("/users", controller.createUser);

module.exports = router;
