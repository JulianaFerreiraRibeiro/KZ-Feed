import { z } from "zod";

export const schema = z.object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    password: z.string().nonempty("Senha é obrigatória")
})

export type ILoginFormValues = z.infer<typeof schema>