import { z } from "zod";
export const iCombustivel = ["GASOLINA", "ALCOOL", "DIESEL", "FLEX"] as const;
export const registerSchema = z.object({
  marca: z.string().min(1, "você deve informar a marca"),
  ano: z.string().min(1, "você deve informar o ano"),
  combustivel: z.enum(iCombustivel),
  num_portas: z.string().default("2"),
  cor: z.string().min(1, "você deve informar a cor"),
  nome_modelo: z.string().min(1, "você deve informar o modelo"),
  valor: z.string().min(1, "você deve informar o valor"),
});
export const returnRegisterSchema = registerSchema.extend({
  id: z.number(),
  timestamp_cadastro: z.number(),
  modelo_id: z.number(),
});
export type RegisterData = z.infer<typeof registerSchema>;
export type ReturnCarData = z.infer<typeof returnRegisterSchema>;
