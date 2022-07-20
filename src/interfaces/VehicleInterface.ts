import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string()
    .min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number().gte(1900).lte(2022),
  color: z.string()
    .min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.optional(z.boolean()),
  buyValue: z.number().int(),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
