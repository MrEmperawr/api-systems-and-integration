module.exports = setLoginStatus = (req, res, next) => {
    const token = req.headers.authorization

    if (token && utils.verifyJWT(token)) {
        const tokenData = utils.decodeJWT(token)
        req.user = tokenData
        req.user.isLoggedIn = true

    } else {
        req.user = { isLoggedIn: false }
    }
    next()
}