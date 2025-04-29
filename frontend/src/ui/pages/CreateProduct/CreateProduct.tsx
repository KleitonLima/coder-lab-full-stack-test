import { ChevronLeft } from "lucide-react";
import { Button } from "../../components/button";
import { useNavigate, useParams } from "react-router-dom";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./createProductForm.schema";
import { z } from "zod";
import { Input } from "../../components/input";
import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../../interfaces";
import { Checkbox } from "../../components/checkbox";
import { createProductController } from "./createProduct.controller";

export const CreateProduct = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<ICategory[]>([]);
    const params = useParams();

    const handleGetCategories = async () => {
        try {
            const response = await createProductController.getCategories();
            if (response.status === 200) {
                setCategories(response.data as ICategory[]);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        handleGetCategories();
    }, []);

    const handleGetProduct = async () => {
        try {
            const response = await createProductController.getProductById(
                params.id as string
            );
            if (response.status === 200) {
                const {
                    name,
                    qty,
                    price,
                    photo,
                    categories: categoriesProduct,
                } = response.data as IProduct;

                form.setValue("name", name);
                form.setValue("qty", qty);
                form.setValue("price", price);
                form.setValue("photo", photo);
                form.setValue("categories", categoriesProduct);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        if (params.id) {
            handleGetProduct();
        }
    }, [params.id]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { categories: [] },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await createProductController.addProduct(values);

            if (response.status === 201) {
                navigate("/");
            }
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <main>
            <header className="p-4">
                <Button className="bg-blue-700" onClick={() => navigate("/")}>
                    <ChevronLeft />
                </Button>
            </header>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 p-4"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome do produto</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="qty"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantidade</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preço</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="photo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Link da foto</FormLabel>
                                <FormControl>
                                    <Input type="url" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {categories.map((category) => (
                        <FormField
                            key={category.id}
                            control={form.control}
                            name="categories"
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={category.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(
                                                    category.id
                                                )}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([
                                                              ...field.value,
                                                              category.id,
                                                          ])
                                                        : field.onChange(
                                                              field.value?.filter(
                                                                  (value) =>
                                                                      value !==
                                                                      category.id
                                                              )
                                                          );
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                            {category.name}
                                        </FormLabel>
                                    </FormItem>
                                );
                            }}
                        />
                    ))}
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </main>
    );
};
