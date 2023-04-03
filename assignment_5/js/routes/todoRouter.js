const express = require('express');
const todoRouter = express.Router();
const TodoController = require('../controllers/todoController')



todoRouter.get('/', forceAuthorize, (req, res, next) => {
    TodoController.getAllUserTodos(req, res)
});
todoRouter.get('/all', forceAuthorize, (req, res, next) => {
    TodoController.getAllTodos(req, res,)
});
todoRouter.get('/:id', forceAuthorize, (req, res, next) => {
    TodoController.getAllTodos(req, res)
});
todoRouter.get('/:id', forceAuthorize, (req, res, next) => {
    TodoController.getAllTodos(req, res)
});
todoRouter.post('/', forceAuthorize, (req, res, next) => {
    TodoController.createTodo(req, res)
});

module.exports = todoRouter;