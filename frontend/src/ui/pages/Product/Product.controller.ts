import { api } from "../../../services/axios.service";
import { IProduct } from "../../interfaces";

export const ProductController = {
    createProduct(data: IProduct) {
        return api.post("/products", data);
    },
    getCategories() {
        return api.get("/categories");
    },
    getProductById(id: string) {
        return api.get(`/products/${id}`);
    },
};
