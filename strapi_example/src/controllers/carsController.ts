import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";

export class CarsController {
    private client: CMSClient
    constructor(client: CMSClient) {
        this.client = client
    }

    public async getCars(req: Request, res: Response) {

        const data = await this.client.getCars()
        res.send(data)

    }

    public async getCar(req: Request, res: Response) {
        const id = +req.params.id
        const data = await this.client.getCar(id)
        res.send(data)
    }

    public async deleteCar(req: Request, res: Response) {
        const id = +req.params.id
        try {
            await this.client.deleteCar(id)
            res.sendStatus(200)

        } catch (error) {
            res.sendStatus(500)
        }

    }

}