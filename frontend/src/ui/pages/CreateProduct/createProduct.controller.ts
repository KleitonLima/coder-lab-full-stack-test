import { api } from "../../../services/axios.service";
import { IProduct } from "../../interfaces";

export const createProduct = {
    addProduct(data: IProduct) {
        return api.post("/products", data);
    },
};
