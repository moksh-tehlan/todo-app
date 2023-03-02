const express = require('express');
const router = express.Router();
// const todoController = require('../controller/todo.controller');
// const todoController = require('../controller/todo.filecontroller');
const todoController = require('../controller/todo.mongodb.controller');

router.get('/',todoController.getTodos);
router.get('/:id',todoController.getTodo);
router.post('/',todoController.createTodo);
router.patch('/:id',todoController.updateTodo);
router.delete('/:id',todoController.deleteTodo);

module.exports = router;