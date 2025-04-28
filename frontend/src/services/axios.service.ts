import axios from "axios";
import { ENVCONFIG } from "../config/env.config";

export const api = axios.create({
    baseURL: ENVCONFIG.VITE_BACKEND,
    headers: {
        "Content-Type": "application/json",
    },
});
