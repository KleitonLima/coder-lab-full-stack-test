import { api } from "../../../services/axios.service";
import { IAddProduct } from "./home.interfaces";

export const homeController = {
    addProduct(data: IAddProduct) {
        return api.post("/products", data);
    },

    getAllProducts(search?: string) {
        return api.get(`/products?search=${search}`);
    },
};
