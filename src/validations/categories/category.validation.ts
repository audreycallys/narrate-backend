import { z } from "zod";

export const categoryIdSchema = z.object({
  id: z.coerce.number().int().positive("Category ID tidak valid"),
});
