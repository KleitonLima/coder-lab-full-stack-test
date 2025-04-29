import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./ui/pages/Home/Home";
import { Product } from "./ui/pages/Product/Product";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-product" element={<Product />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};
