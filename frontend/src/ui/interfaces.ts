export interface IProduct {
    name: string;
    qty: number;
    price: number;
    photo: string;
    categories: string[];
}

export interface ICategory {
    id: string;
    name: string;
}
