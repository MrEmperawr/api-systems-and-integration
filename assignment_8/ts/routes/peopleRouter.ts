import express from 'express';
import { SwapiController } from '../controllers/SwapController';
import { SwapiClient } from '../clients/SwapiClient';

export function createPeopleRouter(): express.Router {
    const router = express.Router();
    const client = new SwapiClient();
    const controller = new SwapiController(client);

    router.get('/', controller.getAllPeople.bind(controller));
    router.get('/:id', controller.getPersonById.bind(controller));

    return router;
}