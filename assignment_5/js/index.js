const express = require('express');
const authRouter = require('./routes/authRouter.js');
const secretsRouter = require('./routes/secretsRouter.js');
const todoRouter = require('./routes/todoRouter.js');
const utils = require('./utils/authUtils')


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
    next()
})

app.use('/', authRouter)
app.use('/secrets', secretsRouter)
app.use('/todos', todoRouter)

// Get start page

app.get('/', (req, res) => {
    res.send(req.user)
})

app.listen(8008, () => {
    console.log('Listening on localhost, port: 8008')
})