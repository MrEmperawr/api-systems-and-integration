import { Request, Response } from 'express';
import { JsonPlaceholderClient } from '../client/JsonPlaceholderClient';
import { Post } from '../models/posts';

export class PostsController {
    private client: JsonPlaceholderClient;

    constructor() {
        this.client = new JsonPlaceholderClient();
    }

    public async getAllPosts(req: Request, res: Response): Promise<void> {
        const posts: Post[] = await this.client.getPosts();
        res.json(posts);
    }

    public async getPostById(req: Request, res: Response): Promise<void> {
        const id: number = parseInt(req.params.id);
        const post: Post = await this.client.getPostById(id);
        res.json(post);
    }

    public async createPost(req: Request, res: Response): Promise<void> {
        const postData: Post = req.body;
        const post: Post = await this.client.createPost(postData);
        res.json(post);
    }

    public async updatePost(req: Request, res: Response): Promise<void> {
        const id: number = parseInt(req.params.id);
        const postData: Post = req.body;
        const post: Post = await this.client.updatePost(id, postData);
        res.json(post);
    }

    public async deletePost(req: Request, res: Response): Promise<void> {
        const id: number = parseInt(req.params.id);
        await this.client.deletePost(id);
        res.sendStatus(204);
    }
}