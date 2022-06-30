const Todo = require("../models/todomodel");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json("could not find all the tools");
  }
};

const createTodo = async (req, res) => {
  try {
    const newtodo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(201).json(newtodo);
  } catch (error) {
    res.status(500).json("could not create the todo");
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json(`couls not find any todo with id${todo}`);
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.staus(200).json("could not update todo");
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json(`couls not find any todo with id${todo}`);
    }
    const deletedtodo = await Todo.deleteOne(todo);
    res.status(200).json(todo);
  } catch (error) {
    res.status(200).json("could not delete todo");
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
