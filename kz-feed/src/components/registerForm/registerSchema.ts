import { z } from "zod";

export const schema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z.string().nonempty("Email obrigatório").email("Email inválido"),
    password: z.string().nonempty("Senha obrigatória").min(8, "A senha precisa conter pelo menos 8 caracteres").regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/, "É necessário pelo menos um caractere especial"),
    confirm: z.string().nonempty("Confirmação de senha obrigatória"),
}).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam ser correspondentes",
    path: ["confirm"],
})

export type IRegisterFormValues = z.infer<typeof schema>