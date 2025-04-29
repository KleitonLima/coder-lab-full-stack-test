import { api } from "../../../services/axios.service";
import { IProduct } from "../../interfaces";

export const createProductController = {
    addProduct(data: IProduct) {
        return api.post("/products", data);
    },
    getCategories() {
        return api.get("/categories");
    },
};
