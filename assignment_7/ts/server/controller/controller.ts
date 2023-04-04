import DatabaseService from '../services/databaseService';
import { Request, Response } from 'express';
import { Product } from '../models/product';

export class ProductsController {
    constructor(private dbService: DatabaseService) { }

    public async getAllProducts(req: Request, res: Response): Promise<void> {
        const products = await this.dbService.getAllProducts();
        res.json(products);
    }

    public async getProductById(req: Request, res: Response): Promise<void> {
        const productId = Number(req.params.id);
        const product = await this.dbService.getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: `Product with id ${productId} not found` });
        }
    }

    public async createProduct(req: Request, res: Response): Promise<void> {
        const newProduct = req.body as Omit<Product, 'id'>;
        if (!newProduct.name || !newProduct.price) {
            res.send(400)
        }
        try {
            await this.dbService.addProduct(newProduct);
            res.sendStatus(201)
        } catch (e) {
            res.status(500)
        }
    }

    public async updateProduct(req: Request, res: Response): Promise<void> {
        const productId = Number(req.params.id);
        const updatedProduct = req.body as Product;

        // Ensure that the ID of the updated product matches the ID in the URL
        if (updatedProduct.id !== productId) {
            res.status(400).json({ message: `Product ID in request body (${updatedProduct.id}) does not match product ID in URL (${productId})` });
            return;
        }
        try {
            await this.dbService.updateProduct(productId, updatedProduct);
            res.json(productId);

        } catch (e) {
            res.status(404).json({ message: `Product with id ${productId} not found` });

        }

    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        const productId = Number(req.params.id);
        try {
            await this.dbService.deleteProduct(productId);
            res.json({ message: `Product with id ${productId} deleted successfully` });
        } catch (e) {
            res.status(404).json({ message: `Product with id ${productId} not found` });
        }

    }
}
