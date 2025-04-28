import { DiamondPlus, Search, X } from "lucide-react";
import { Button } from "../../components/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../../components/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { homeController } from "./home.controller";
import { IAddProduct } from "./home.interfaces";
import clsx from "clsx";
import { Input } from "../../components/input";

export const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<IAddProduct[]>([]);
    const [search, setSearch] = useState("");

    const handleAllProducts = async () => {
        try {
            const response = await homeController.getAllProducts(search);

            if (response.status === 200) {
                setProducts(response.data as IAddProduct[]);
            }
        } catch (error) {
            console.error("Falha ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        if (search === "") {
            handleAllProducts();
        }
    }, [search]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearch(value);
    };

    return (
        <main>
            <header className="flex justify-between p-4">
                <Button
                    className="w-50 bg-blue-700"
                    onClick={() => navigate("/add-product")}
                >
                    <DiamondPlus /> Adicionar produto
                </Button>
                <div className="flex items-center">
                    <Button
                        onClick={handleAllProducts}
                        className={clsx(
                            "border-b-2 border-t-2 border-l-2 border-sky-700 text-sky-700 bg-white rounded-l-md rounded-r-none hover:text-white"
                        )}
                    >
                        <Search />
                    </Button>
                    <Input
                        type="text"
                        placeholder="Digite o nome do produto"
                        className={clsx(
                            "w-48 border-b-2 border-t-2 border-r-2 border-l-0 rounded-l-none border-sky-700",
                            {
                                "pr-8": search,
                            }
                        )}
                        value={search}
                        onChange={handleSearch}
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-10 ml-2 text-red-500"
                        >
                            <X />
                        </button>
                    )}
                </div>
            </header>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 place-items-center">
                {products.map((product) => (
                    <Card
                        key={product.name}
                        className={clsx("w-60 h-80 shadow-lg", {
                            "opacity-60": product.qty <= 0,
                        })}
                    >
                        <CardHeader className="flex flex-col">
                            <img
                                src={product.photo}
                                alt={`Foto do produto: ${product.name}`}
                                className="h-44 object-cover self-center mb-1"
                            />
                            <CardTitle>{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                R$
                                {product.price.toString().replace(".", ",")}
                            </p>
                            {product.qty <= 0 && <p>Produto esgotado</p>}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
};
