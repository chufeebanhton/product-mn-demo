
import type { Product } from '../Schemal/Product.schemal.js';

let products: Product[];

export function setStore(data:Product[]) {
    products = data;
}

export function getStore():Product[] {
    return products;
}

export function addProduct(data: Product):Product {
    products.push(data);
    return data;
}