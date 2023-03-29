const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config()

// This should not be here
// Create a .env file and make sure it is ignored by .gitignore
// Install "dotenv" and import it as such require("dotenv").config();
// Now we can access the contents of the .env-file via process.env
// Remove the JWT_SECRET constant and make use of the secret from the .env file

module.exports.hashPassword = (password) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

module.exports.comparePassword = (password, hash) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}

module.exports.getJWTToken = (account) => {
    const userData = { userId: account.id, username: account.username }
    const accessToken = jwt.sign(userData, process.env.JWT_SECRET)
    return accessToken
}

module.exports.verifyJWT = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports.decodeJWT = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET)
}