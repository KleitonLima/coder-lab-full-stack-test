import { api } from "../../../services/axios.service";

export const homeController = {
    getAllProducts(search?: string) {
        const query = search ? `?search=${search}` : "";
        return api.get(`/products${query}`);
    },
};
