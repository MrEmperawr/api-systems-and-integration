import { Request, Response } from 'express';
import { JsonPlaceholderClient } from '../client/JsonPlaceholderClient';
import { User } from '../models/users';

export class UsersController {
    private client: JsonPlaceholderClient;

    constructor(client: JsonPlaceholderClient) {
        this.client = client;
    }

    public async getAllUsers(req: Request, res: Response): Promise<void> {
        const users: User[] = await this.client.getUsers();
        res.json(users);
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const id: number = parseInt(req.params.id);
        const user: User = await this.client.getUserById(id);
        res.json(user);
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const userData: User = req.body;
        const user: User = await this.client.createUser(userData);
        res.json(user);
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        const id: number = parseInt(req.params.id);
        const userData: User = req.body;
        const user: User = await this.client.updateUser(id, userData);
        res.json(user);
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const id: number = parseInt(req.params.id);
        await this.client.deleteUser(id);
        res.sendStatus(204);
    }
}