import { DiamondPlus } from "lucide-react";
import { Button } from "../../components/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../../components/card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <main>
            <header>
                <Button
                    className="bg-blue-700"
                    onClick={() => navigate("/add-product")}
                >
                    <DiamondPlus /> Adicionar produto
                </Button>
            </header>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 place-items-center">
                <Card className="w-60"></Card>
            </div>
        </main>
    );
};
