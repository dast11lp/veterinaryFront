import { registerUserThunk } from '../api/auth';
import { Input } from './Input';
import { useAppDispatch } from '../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerPetFormRules } from '../helpers';
import { PetData, UserData } from '../types/User.type';
import { registerPetThunk } from '../api/pet';

interface PetData { }

export const PetRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<PetData>({ mode: 'all' });
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<PetData> = (data) => {
        const body = {
            ...data,
            owner: {
                id: JSON.parse(localStorage.getItem("userInfo")).id
            },
        }
        dispatch(registerPetThunk(body))
    };
    return (
        <div className='register'>
            {/* <div>{userInfo}</div> */}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form__title'>Registra tu Mascota</h2>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.name} name={"name"} label={"Nombre"} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.high} name={"high"} label={"Altura"} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.weight} name={"weight"} label={"Peso"} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.species} name={"species"} label={"Especie"} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.breed} name={"breed"} label={"Raza"} />
                <input type='submit' className='btn btn--form' value="Registrarse" />
            </form>
        </div>

    )
}





