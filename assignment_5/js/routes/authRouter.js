const express = require('express');
const authRouter = express.Router();

const AuthController = require('../controllers/authController')

authRouter.get('/', (req, res) => {
    res.send(req.user)
})
authRouter.post('/register', (req, res, next) => {
    AuthController.registerNewUser(req, res)
});
authRouter.post('/login', (req, res, next) => {
    AuthController.login(req, res)
});

module.exports = authRouter;