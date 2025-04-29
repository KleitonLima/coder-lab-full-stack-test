import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./ui/pages/Home/Home";
import { CreateProduct } from "./ui/pages/CreateProduct/CreateProduct";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-product" element={<CreateProduct />} />
            </Routes>
        </BrowserRouter>
    );
};
