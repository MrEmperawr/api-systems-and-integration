const express = require('express');
const secretsRouter = express.Router();
const forceAuthorize = require('../middleware/forceAuthorize');
const SecretsController = require('../controllers/secretsController');


secretsRouter.get('/', forceAuthorize, (req, res, next) => {
    SecretsController.getSecrets(req, res)
});

module.exports = secretsRouter;