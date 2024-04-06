// import { useSelector } from 'react-redux'
import { registerUserThunk } from '../api/auth';
import { Input } from './Input';
import { useAppDispatch } from '../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerFormRules } from '../helpers';
import { UserData } from '../types/User.type';

export const UserRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<UserData>({ mode: 'all' });
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<UserData> = (data) => {
        dispatch(registerUserThunk(data))
    };

    return (
        <div className='register'>
            {/* <div>{userInfo}</div> */}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form__title'>Registrarse</h2>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.firstname} name={"firstname"} label={"Nombre"} />
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.surname} name={"surname"} label={"Apellido"} />
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.email} name={"email"} label={"Correo Electrónico"} />
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.password} name={"password"} label={"Contraseña"} />
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.address} name={"address"} label={"Dirección"} />
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.phoneNumber} name={"phoneNumber"} label={"Teléfono"} />
                <input type='submit' className='btn btn--form' value="Registrarse" />
            </form>
        </div>

    )
}
