import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"
import { StyledRegisterFormContainer } from "./style"
import { useForm } from 'react-hook-form';

interface IRegisterFormData{
    name: string;
    email: string;
    password: string;
    confirm: string;
}

export const RegisterForm = () => {
    const {handleSubmit, register} = useForm<IRegisterFormData>()

    const submit = async (formData: IRegisterFormData) => {
        console.log(formData)
    }
    return(
        <StyledRegisterFormContainer>
            <section className = "registerFormHeader">
                <TitleTwo>Cadastre um usuário</TitleTwo>
                <ParagraphOne>Preencha os campos corretamente para fazer cadastro</ParagraphOne>
            </section>
            <form className="registerForm" onSubmit={handleSubmit(submit)}>  
                <Input inputsize="medium" placeholder="Nome" type = "text" register={register("name")}/>
                <Input inputsize="medium" placeholder="Email" type="email" register={register("email")}/>
                <Input inputsize="medium" placeholder="Senha" type="password" register={register("password")}/>
                <Input inputsize="medium" placeholder="Confirmar senha" type="password" register={register("confirm")}/>
                <Button buttonstyle="noneoutline" buttonsize="big">Cadastrar-se</Button>
            </form>
        </StyledRegisterFormContainer>
    )
}