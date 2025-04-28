import { axiosService } from "../../../axios-service";
import { IAddProduct } from "./home.interfaces";

export class homeController {
    addProduct(data: IAddProduct) {
        return axiosService.post("/products", data);
    }
}
