const express = require('express')
const db = require('./services/DBService.js')
const utils = require('./utils/utils')

const app = express();

app.use(express.json())


app.use((req, res, next) => {
    const token = req.headers.authorization

    if (token && utils.verifyJWT(token)) {
        const tokenData = utils.decodeJWT(token)
        req.user = tokenData
        req.user.isLoggedIn = true

    } else {
        req.user = { isLoggedIn: false }
    }
    // Now we move on to the the next middleware or to the end of the request-response chain
    next()
})

// Force login middleware

const forceAuthorize = (req, res, next) => {
    if (req.user.isLoggedIn) {
        next()
    } else {
        res.sendStatus(401)
    }
}

// Get start page

app.get('/', (req, res) => {
    res.send(req.user)
})

// Register new user

app.post('/register', (req, res) => {
    // Destructuring username and password from request body
    const { username, password } = req.body
    const hashedPassword = utils.hashPassword(password)

    db.registerUser(username, hashedPassword, (error) => {
        if (error) {
            console.log(error)
            res.status(500).send(error)
        } else {
            res.sendStatus(200)
        }
    })

})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    db.getAccountByUsername(username, (error, account) => {
        if (error) {
            res.status(500).send(error)
        } else if (account) {
            const hashedPassword = account.hashedPassword
            const correctPassword = utils.comparePassword(password, hashedPassword)

            if (correctPassword) {
                const jwtToken = utils.getJWTToken(account)
                res.send(jwtToken)
            } else {
                res.sendStatus(404)
            }

        } else {
            res.sendStatus(404)
        }
    })
})

// Force login to get secrets

app.get('/secrets', forceAuthorize, (req, res) => {
    res.send({
        secret1: "Classes? Syntactical sugar. No less, no more.",
        secret2: "The cake is a lie."
    })
})

// Todos

app.get('/todos/all', forceAuthorize, (req, res) => {
    db.getTodos((error, data) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })

})

app.get('/todos/all/:id', forceAuthorize, (req, res) => {
    const todoId = req.params.id
    db.getTodoById(todoId, (error, data) => {
        if (error) {
            res.send(500)
        } else {
            res.send(data)
        }
    })
})

app.get('/todos', forceAuthorize, (req, res) => {
    const id = req.user.userId
    db.getTodosByAccountId(id, (error, data) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })

})

app.get('/todos/:id', forceAuthorize, (req, res) => {
    const todoId = req.params.id
    const userId = req.user.userId
    db.getTodoByAccountId(todoId, userId, (error, data) => {
        if (error) {
            res.send(500)
        } else {
            res.send(data)
        }
    })
})

app.post('/todos', forceAuthorize, (req, res) => {
    const { title, isDone } = req.body
    const user = req.user
    if (title && isDone !== undefined) {
        db.addTodo(title, isDone, user.userId, (error) => {
            error ? res.sendStatus(500) : res.sendStatus(200)
        })

    } else {
        res.sendStatus(400)
    }


})

app.listen(8008, () => {
    console.log('Listening on localhost, port: 8008')
})
