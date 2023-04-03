const express = require('express');
const forceAuthorize = require('../middleware/forceAuthorize');

const secretsRouter = express.Router();

const SecretsController = require('../controllers/secretsController');

secretsRouter.get('/', forceAuthorize, (req, res, next) => {
    SecretsController.getSecrets(req, res)
});

module.exports = secretsRouter;