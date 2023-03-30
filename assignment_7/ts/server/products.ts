export interface IProduct {
    id: number,
    name: string,
    price: number,
}

export const products: IProduct[] = [
    {
        id: 1,
        name: 'Pants',
        price: 100
    },
    {
        id: 1,
        name: 'Shirt',
        price: 120
    }
]