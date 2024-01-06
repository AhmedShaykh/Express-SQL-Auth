import { z } from "zod";

export const createNoteSchema = z.object({
    body: z.object({
        name: z
            .string()
            .min(4, { message: "Name Must Be Greater Than 4 Characters!" }),
        description: z
            .string()
            .min(7, { message: "Description Must Be Greater Than 7 Characters!" }),
    })
});

export const updateNoteSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            name: z
                .string()
                .min(4, { message: "Name Must Be Greater Than 4 Characters!" }),
            description: z
                .string()
                .min(7, { message: "Description Must Be Greater Than 7 Characters!" }),
        })
        .partial()
});