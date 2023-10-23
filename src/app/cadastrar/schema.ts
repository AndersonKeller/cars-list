import { z } from "zod";
export const iCombustivel = ["GASOLINA", "ALCOOL", "DIESEL", "FLEX"] as const;
export const registerSchema = z.object({
  marca: z
    .string()
    .min(1, "você deve informar a marca")
    .max(12, "tamanho máximo de 12 caracteres"),
  ano: z
    .string()
    .min(4, "formato inválido")
    .max(4, "formato inválido")
    .transform((val) => parseInt(val))
    .pipe(
      z
        .number()
        .lt(2024, "ano inválido, você nãp pode inserir anos futuros")
        .gt(
          1886,
          "ano inválido, o primeiro carro patenteado no mundo foi em 1886"
        )
    ),
  combustivel: z.enum(iCombustivel),
  num_portas: z
    .string()
    .max(1, "insira um valor entre 1 e 9")
    .default("2")
    .transform((val) => parseInt(val))
    .pipe(z.number().gt(0, "insira um valor entre 1 e 9")),

  cor: z
    .string()
    .min(1, "você deve informar a cor")
    .max(12, "tamanho máximo de 12 caracteres"),

  nome_modelo: z
    .string()
    .min(1, "você deve informar o modelo")
    .max(22, "tamanho máximo de 22 caracteres"),
  valor: z.string().min(1, "você deve informar o valor"),
});
export const returnRegisterSchema = registerSchema.extend({
  id: z.number(),
  timestamp_cadastro: z.number(),
  modelo_id: z.number(),
  brand: z.number(),
});
export type RegisterData = z.infer<typeof registerSchema>;
export type ReturnCarData = z.infer<typeof returnRegisterSchema>;
