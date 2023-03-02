const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "todo.data.json");

const todoData = JSON.parse(fs.readFileSync(filePath));

// function to get all todos
const getTodos = (req, res) => {
  if (todoData.length == 0) {
    return res.status(404).json({
      status: "fail",
      message: "no data found",
    });
  }
  res.status(200).json({
    status: "successfull",
    results: todoData.length,
    data: todoData,
  });
};

// function to get single todo
const getTodo = (req, res) => {
  if (todoData.length == 0) {
    return res.status(404).json({
      status: "fail",
      message: "no data found",
    });
  }
  const id = req.params.id * 1;
  const todo = todoData.find((todo) => todo.id === id);
  res.status(200).json({
    status: "successfull",
    data: todo,
  });
};

// function to create a new todo
const createTodo = (req, res) => {
  const newId = todoData.length == 0 ? 1 : todoData[todoData.length - 1].id + 1;
  
  const newTodo = Object.assign({ id: newId,time: req.time }, req.body);
  todoData.push(newTodo);

  fs.writeFile(filePath,JSON.stringify(todoData),()=>{
    res.status(201).json({
        status: "successfull",
        data: newTodo,
      });
  });
};

// function to update an existing todo
const updateTodo = (req, res) => {
  const id = req.params.id * 1;
  var todo = todoData.find((todo) => todo.id === id);

  if (todo == null) {
    return res.status(404).json({
      status: "fail",
      message: "no data found",
    });
  }

  var todoIndex = todoData.findIndex((el) => el.id === id);
  Object.assign(todoData[todoIndex],req.body);

  fs.writeFile(filePath,JSON.stringify(todoData),()=>{
    res.status(201).json({
        status: "successfull",
        data: todoData[todoIndex],
      });
  })
};

// function to delete todo
const deleteTodo = (req, res) => {
  const id = req.params.id * 1;
  var todo = todoData.find((todo) => todo.id === id);

  if (todo == null) {
    return res.status(404).json({
      status: "fail",
      message: "no data found",
    });
  }

  todoData.splice(
    todoData.findIndex((el) => el.id === id),
    1
  );

  fs.writeFile(filePath,JSON.stringify(todoData),()=>{
    return res.status(204).json({
        status:"successfull",
        message:"data delete successfully"
    });
  });
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};