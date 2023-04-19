import axios, { AxiosResponse } from 'axios';
import { Film, Person, Planet } from '../models/swapiModels';

export class SwapiClient {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://swapi.dev/api';
    }

    public async getPeople(pageNo?: any): Promise<Person[]> {
        let url = pageNo ? `${this.baseUrl}/people/?page=${pageNo}` : `${this.baseUrl}/people`
        const response: AxiosResponse<Person[]> = await axios.get(url);
        return response.data;
    }

    public async getPersonById(id: number): Promise<Person> {
        const response: AxiosResponse<Person> = await axios.get(`${this.baseUrl}/people/${id}`);
        return response.data;
    }

    public async getPlanets(pageNo: any): Promise<Planet[]> {
        let url = pageNo ? `${this.baseUrl}/planets/?page=${pageNo}` : `${this.baseUrl}/planets`
        const response: AxiosResponse<Planet[]> = await axios.get(url);
        return response.data;
    }

    public async getPlanetById(id: number): Promise<Planet> {
        const response: AxiosResponse<Planet> = await axios.get(`${this.baseUrl}/planets/${id}`);
        return response.data;
    }

    public async getFilms(pageNo: any): Promise<Film[]> {
        let url = pageNo ? `${this.baseUrl}/films/?page=${pageNo}` : `${this.baseUrl}/films`
        const response: AxiosResponse<Film[]> = await axios.get(url);
        return response.data;
    }

    public async getFilmById(id: number): Promise<Film> {
        const response: AxiosResponse<Film> = await axios.get(`${this.baseUrl}/films/${id}`);
        return response.data;
    }
}
