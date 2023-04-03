import axios, { AxiosResponse } from 'axios';
import { Post, PostData } from '../models/posts';
import { User } from '../models/users';



export class JsonPlaceholderClient {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    public async getPosts(): Promise<Post[]> {
        const response: AxiosResponse<Post[]> = await axios.get(`${this.baseUrl}/posts`);
        return response.data;
    }

    public async getPostById(id: number): Promise<Post> {
        const response: AxiosResponse<Post> = await axios.get(`${this.baseUrl}/posts/${id}`);
        return response.data;
    }

    public async createPost(postData: PostData): Promise<Post> {
        const response: AxiosResponse<Post> = await axios.post(`${this.baseUrl}/posts`, postData);
        return response.data;
    }

    public async updatePost(id: number, postData: PostData): Promise<Post> {
        const response: AxiosResponse<Post> = await axios.put(`${this.baseUrl}/posts/${id}`, postData);
        return response.data;
    }

    public async deletePost(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/posts/${id}`);
    }

    public async getUsers(): Promise<User[]> {
        const response: AxiosResponse<User[]> = await axios.get(`${this.baseUrl}/users`);
        return response.data;
    }

    public async getUserById(id: number): Promise<User> {
        const response: AxiosResponse<User> = await axios.get(`${this.baseUrl}/users/${id}`);
        return response.data;
    }

    public async createUser(userData: User): Promise<User> {
        const response: AxiosResponse<User> = await axios.post(`${this.baseUrl}/users`, userData);
        return response.data;
    }

    public async updateUser(id: number, userData: User): Promise<User> {
        const response: AxiosResponse<User> = await axios.put(`${this.baseUrl}/users/${id}`, userData);
        return response.data;
    }

    public async deleteUser(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/users/${id}`);
    }
}