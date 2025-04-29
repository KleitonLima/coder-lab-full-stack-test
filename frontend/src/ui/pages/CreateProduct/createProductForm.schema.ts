import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3).max(50),
    qty: z.coerce.number().min(1).positive(),
    price: z.coerce.number().positive(),
    photo: z.string().url(),
    categories: z
        .array(z.string())
        .refine((value) => value.some((item) => item), {
            message: "You have to select at least one item.",
        }),
});
