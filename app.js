const express = require('express');
const logger = require('morgan');


const todoRoutes = require('./routes/todo.routes');
const timeMiddleware = require('./middlewares/time.middleware');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(timeMiddleware);

app.use('/todos', todoRoutes);

module.exports = app;