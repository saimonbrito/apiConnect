import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/subscriptions",
		{
			schema: {
				body: z.object({
					nome: z.string(),
					email: z.string().email(),
				}),
				response: {
					201: z.object({
						nome: z.string(),
						email: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { email, nome } = request.body;
			// criaçao da inscriçao no banco de dados
			return reply.status(201).send({
				nome,
				email,
			});
		},
	);
};
