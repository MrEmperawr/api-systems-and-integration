import axios, { AxiosResponse } from 'axios';
import { Film, Person, Planet } from '../models/swapiModels';

export class SwapiClient {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://swapi.dev/api';
    }

    public async getPeople(): Promise<Person[]> {
        const response: AxiosResponse<Person[]> = await axios.get(`${this.baseUrl}/people`);
        return response.data;
    }

    public async getPersonById(id: number): Promise<Person> {
        const response: AxiosResponse<Person> = await axios.get(`${this.baseUrl}/people/${id}`);
        return response.data;
    }

    public async getPlanets(): Promise<Planet[]> {
        const response: AxiosResponse<Planet[]> = await axios.get(`${this.baseUrl}/planets`);
        return response.data;
    }

    public async getPlanetById(id: number): Promise<Planet> {
        const response: AxiosResponse<Planet> = await axios.get(`${this.baseUrl}/planets/${id}`);
        return response.data;
    }

    public async getFilms(): Promise<Film[]> {
        const response: AxiosResponse<Film[]> = await axios.get(`${this.baseUrl}/films`);
        return response.data;
    }

    public async getFilmById(id: number): Promise<Film> {
        const response: AxiosResponse<Film> = await axios.get(`${this.baseUrl}/films/${id}`);
        return response.data;
    }
}
