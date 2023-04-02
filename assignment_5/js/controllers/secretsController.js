
const SecretsController = {
    getSecrets: (req, res) => {
        res.send({
            secret1: "Classes? Syntactical sugar. No less, no more.",
            secret2: "The cake is a lie."
        })
    }
}

module.exports = SecretsController


