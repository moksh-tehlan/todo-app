const Todo = require('./../models/todos.model');

// function to get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// function to get single todo
const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// function to create a new todo
const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// function to update an existing todo
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// function to delete todo
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id,req.body);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};