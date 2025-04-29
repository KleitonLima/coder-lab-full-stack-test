import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3).max(50),
    qty: z.number().min(1).positive(),
    price: z.number().positive(),
    photo: z.string().url(),
    categories: z.array(z.string()).nonempty(),
});
