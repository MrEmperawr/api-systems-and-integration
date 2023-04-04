import express from 'express';
import { SwapiController } from '../controllers/SwapController';
import { SwapiClient } from '../clients/SwapiClient';

export function createFilmsRouter(): express.Router {
    const router = express.Router();
    const client = new SwapiClient();
    const controller = new SwapiController(client);

    router.get('/', controller.getAllFilms.bind(controller));
    router.get('/:id', controller.getFilmById.bind(controller));

    return router;
}