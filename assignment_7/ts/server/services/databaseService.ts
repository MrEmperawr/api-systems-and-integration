import { createConnection, SQLiteClient } from '../../../../sqliteWrapper/SqliteClientWrapper';
import { Product } from '../models/product';

class DatabaseService {
    private db!: SQLiteClient;

    constructor(private dbFilePath?: string) { }

    public async connect() {
        this.db = await createConnection(this.dbFilePath);
        this.db.run(`
        CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL
        )
    `);
    }

    public async getProductById(id: number) {
        await this.connect()
        const product = await this.db.get<Product>(
            'SELECT * FROM products WHERE id = ?',
            [id]
        );
        return product;
    }

    public async getAllProducts() {
        await this.connect()
        const products = await this.db.all<Product>('SELECT * FROM products');
        return products;
    }

    public async addProduct(product: Omit<Product, 'id'>) {
        await this.connect()
        try {
            await this.db.run(
                'INSERT INTO products (name, price) VALUES (?, ?)',
                [product.name, product.price]
            );
            return;

        } catch (e: any) {
            throw Error(e)
        }
    }

    public async updateProduct(id: number, product: Omit<Product, 'id'>) {
        await this.connect()
        await this.db.run(
            'UPDATE products SET name = ?, price = ? WHERE id = ?',
            [product.name, product.price, id]
        );
    }

    public async deleteProduct(id: number) {
        await this.connect()
        await this.db.run('DELETE FROM products WHERE id = ?', [id]);
    }
}

export default DatabaseService;
