import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";

export class BooksController {
    private client: CMSClient
    constructor(client: CMSClient) {
        this.client = client
    }

    public async getBooks(req: Request, res: Response) {

        const data = await this.client.getBooks()
        res.send(data.data)

    }

    public async getBook(req: Request, res: Response) {
        const id = +req.params.id
        const data = await this.client.getBook(id)
        res.send(data.data)
    }

    public async deleteBook(req: Request, res: Response) {
        const id = +req.params.id
        try {
            await this.client.deleteBook(id)
            res.sendStatus(200)
        } catch (error) {
            res.sendStatus(500)
        }
    }

}