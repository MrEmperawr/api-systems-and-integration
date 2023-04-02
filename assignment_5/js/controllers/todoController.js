const db = require('../services/databaseService')

const TodoController = {
    getAllUserTodos: (req, res) => {
        db.getTodos((error, data) => {
            if (error) {
                res.sendStatus(500)
            } else {
                res.send(data)
            }
        })
    },
    getTodoById: (req, res) => {
        const todoId = req.params.id
        db.getTodoById(todoId, (error, data) => {
            if (error) {
                res.send(500)
            } else {
                res.send(data)
            }
        })
    },
    getAllTodos: (req, res) => {
        const id = req.user.userId
        db.getTodosByAccountId(id, (error, data) => {
            if (error) {
                res.sendStatus(500)
            } else {
                res.send(data)
            }
        })
    },
    getUserTodo: (req, res) => {
        const todoId = req.params.id
        const userId = req.user.userId
        db.getTodoByAccountId(todoId, userId, (error, data) => {
            if (error) {
                res.send(500)
            } else {
                res.send(data)
            }
        })
    },
    createTodo: (req, res) => {
        const { title, isDone } = req.body
        const user = req.user
        if (title && isDone !== undefined) {
            db.addTodo(title, isDone, user.userId, (error) => {
                error ? res.sendStatus(500) : res.sendStatus(200)
            })

        } else {
            res.sendStatus(400)
        }
    }
}

module.exports = TodoController