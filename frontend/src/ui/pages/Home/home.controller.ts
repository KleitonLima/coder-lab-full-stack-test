import { api } from "../../../services/axios.service";
import { IAddProduct } from "./home.interfaces";

export const homeController = {
    addProduct(data: IAddProduct) {
        return api.post("/products", data);
    },

    getAllProducts(search?: string) {
        if (search) {
            return api.get(`/products?search=${search}`);
        }
        return api.get("/products");
    },
};
