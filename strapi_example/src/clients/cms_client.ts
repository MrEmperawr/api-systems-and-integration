import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:1337/api',
});

export class CMSClient {

    constructor() { }

    public async getBooks(): Promise<any> {
        const response = await client.get('/books')
        return response.data;
    }

    public async getBook(id: number): Promise<any> {
        const response = await client.get(`/books/${id}`)
        return response.data;
    }

    public async deleteBook(id: number): Promise<any> {
        const response = await client.delete(`/books/${id}`)
        return response.data;
    }

    public async getCars(): Promise<any> {
        const response = await client.get('/cars')
        return response.data;
    }

    public async getCar(id: number): Promise<any> {
        const response = await client.get(`/cars/${id}`)
        return response.data;
    }

    public async deleteCar(id: number): Promise<any> {
        const response = await client.delete(`/cars/${id}`)
        return response.data;
    }
}

