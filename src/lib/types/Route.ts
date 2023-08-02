import { z } from 'zod';

export const routeSchema = z.object({
	name: z.string(),
	path: z.string(),
	icon: z.string(),
});

export const routesSchema = z.array(routeSchema);

export type Route = z.infer<typeof routeSchema>;
