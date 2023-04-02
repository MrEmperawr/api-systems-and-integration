const db = require('../services/databaseService')
const utils = require('../utils/authUtils')

const AuthController = {
    registerNewUser: (req, res) => {
        const { username, password } = req.body
        const hashedPassword = utils.hashPassword(password)

        db.registerUser(username, hashedPassword, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.sendStatus(200)
            }
        })
    },
    login: (req, res) => {
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
    }
}

module.exports = AuthController