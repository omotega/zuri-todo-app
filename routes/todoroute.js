const express = require("express");

const todorouter = express.Router();

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todocontroller");

todorouter.route("/").get(getAllTodos).post(createTodo);
todorouter.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = todorouter;
