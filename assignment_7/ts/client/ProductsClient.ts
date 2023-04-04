import axios, { AxiosResponse } from 'axios';
import { Product } from '../server/models/product';

const API_URL = 'http://localhost:8008';

export const getAllProducts = async (): Promise<Product[]> => {
    const response: AxiosResponse<Product[]> = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const getProductById = async (id: number): Promise<Product | null> => {
    try {
        const response: AxiosResponse<Product> = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error: any) {
        if (error.response.status === 404) {
            return null;
        }
        throw error;
    }
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
    const response: AxiosResponse<Product> = await axios.post(`${API_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (product: Product): Promise<Product> => {
    const response: AxiosResponse<Product> = await axios.put(`${API_URL}/products/${product.id}`, product);
    return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/products/${id}`);
};