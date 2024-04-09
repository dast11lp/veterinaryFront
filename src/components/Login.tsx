import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "./Input"
import { registerFormRules } from "../helpers"
import { useAppDispatch } from "../app/store"
import { loginThunk } from "../api/auth"

export interface InputsLogin {
  email: string,
  password: string
}

export const Login = () => {

  const { handleSubmit, register, watch, formState: { errors } } = useForm<InputsLogin>({ mode: 'all' })
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    dispatch(loginThunk(data));
  }

  return (
    <div className="login" onSubmit={handleSubmit(onSubmit)}>
      <form className="login__form">
        <h1>Logo</h1>
        <p>Accede fácilmente para mimar a tu mascota</p>
        <Input register={register} watch={watch} rules={registerFormRules.email} errors={errors} name={"email"} label={"Correo Electrónico"}></Input>
        <Input register={register} watch={watch} rules={registerFormRules.password} errors={errors} name={"password"} label={"Contraseña"}></Input>
        <input type='submit' className='btn btn--form' value="Iniciar Sesión" />
      </form>
    </div>
  )
}
