// import { useSelector } from 'react-redux'
import { registerUserThunk } from '../api/auth';
import { Input } from './Input';
import { RootState, useAppDispatch } from '../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerFormRules } from '../helpers';
import { UserData } from '../types/User.type';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSuccess } from '../features/auth/authSlice';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const UserRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<UserData>({ mode: 'all' });

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const authSucces: boolean = useSelector((state: RootState) => state.authReducer.success);

    const onSubmit: SubmitHandler<UserData> = (data) => {
        dispatch(registerUserThunk(data))
    };


    useEffect(()=> {
        if (authSucces === true) {
            setSuccess(false);
            navigate('/login', {replace: true})
        }
    },[authSucces])

    return (
        <div className='register'>
            {/* <div>{userInfo}</div> */}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form__title'>Registrarse</h2>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.firstname} name={"firstname"} label={"Nombre"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.surname} name={"surname"} label={"Apellido"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.email} name={"email"} label={"Correo Electrónico"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.password} name={"password"} label={"Contraseña"} type='password' icon={faEye}/>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.address} name={"address"} label={"Dirección"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerFormRules.phoneNumber} name={"phoneNumber"} label={"Teléfono"} type='text' icon={null}/>
                <input type='submit' className='btn btn--form' value="Registrarse" />
            </form>
        </div>

    )
}
