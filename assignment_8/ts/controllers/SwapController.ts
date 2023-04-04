import { Request, Response } from 'express';
import { SwapiClient } from '../clients/SwapiClient';

export class SwapiController {
    private readonly client: SwapiClient;

    constructor(client: SwapiClient) {
        this.client = client;
    }

    public async getAllPeople(req: Request, res: Response): Promise<void> {
        console.log("hello")
        const people = await this.client.getPeople();
        res.json(people);
    }

    public async getPersonById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const person = await this.client.getPersonById(id);
        res.json(person);
    }

    public async getAllPlanets(req: Request, res: Response): Promise<void> {
        const planets = await this.client.getPlanets();
        res.json(planets);
    }

    public async getPlanetById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const planet = await this.client.getPlanetById(id);
        res.json(planet);
    }

    public async getAllFilms(req: Request, res: Response): Promise<void> {
        const films = await this.client.getFilms();
        res.json(films);
    }

    public async getFilmById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const film = await this.client.getFilmById(id);
        res.json(film);
    }
}
