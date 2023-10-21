import { z } from "zod";

const CarSchema = z.object({
  id: z.number(),
  timestamp_cadastro: z.number(),
  modelo_id: z.number(),
  ano: z.number(),
  combustivel: z.string(),
  num_portas: z.number(),
  cor: z.string(),
  nome_modelo: z.string(),
  valor: z.number(),
});
export type Cars = z.infer<typeof CarSchema>;
