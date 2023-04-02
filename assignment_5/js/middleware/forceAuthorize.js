module.exports = forceAuthorize = (req, res, next) => {
    if (req.user.isLoggedIn) {
        next()
    } else {
        res.sendStatus(401)
    }
}