import express from 'express';
import { SwapiController } from '../controllers/SwapController';
import { SwapiClient } from '../clients/SwapiClient';

export function createPlanetsRouter(): express.Router {
    const router = express.Router();
    const client = new SwapiClient();
    const controller = new SwapiController(client);

    router.get('/', controller.getAllPlanets.bind(controller));
    router.get('/:id', controller.getPlanetById.bind(controller));

    return router;
}