import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "./Input"
import { registerFormRules } from "../helpers"
import { RootState, useAppDispatch } from "../app/store"
import { loginThunk } from "../api/auth"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { setSuccess } from "../features/auth/authSlice"
import { faEye } from "@fortawesome/free-solid-svg-icons"

export interface InputsLogin {
  email: string,
  password: string
}

export const Login = () => {

  const { handleSubmit, register, watch, formState: { errors } } = useForm<InputsLogin>({ mode: 'all' })

  const userToken: string | null = useSelector((state: RootState) => state.authReducer.userToken)
  

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    dispatch(loginThunk(data));

  }
  console.log("???"+userToken);
  

  useEffect(() => {
    if (userToken !== null) {
      navigate('/', { replace: true })
    }
  }, [userToken])

  return (
    <div className="login" onSubmit={handleSubmit(onSubmit)}>
      <form className="login__form">
        <h1>Logo</h1>
        <p>Accede fácilmente para mimar a tu mascota</p>
        <Input register={register} watch={watch} rules={registerFormRules.email} errors={errors} name={"email"} label={"Correo Electrónico"} type="text" icon={null}></Input>
        <Input register={register} watch={watch} rules={registerFormRules.password} errors={errors} name={"password"} label={"Contraseña"} type="password" icon={faEye}></Input>
        <input type='submit' className='btn btn--form' value="Iniciar Sesión" />
      </form>
    </div>
  )
}
