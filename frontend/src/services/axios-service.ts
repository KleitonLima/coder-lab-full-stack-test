import axios from "axios";
import { ENVCONFIG } from "../config/env.config";

export const axiosService = axios.create({
    baseURL: ENVCONFIG.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
