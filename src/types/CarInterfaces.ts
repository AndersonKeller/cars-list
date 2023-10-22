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
  brand: z.number(),
});
export const brandsList = ["TOYOTA"];
export const modelsList: Models[] = [
  { id: 77, model: "COROLLA" },
  { id: 79, model: "HILLUX SW4" },
  { id: 88, model: "ETIOS" },
];
export const modelsSchema = z.object({
  id: z.number(),
  model: z.string(),
});
export type Cars = z.infer<typeof CarSchema>;
export type Models = z.infer<typeof modelsSchema>;
