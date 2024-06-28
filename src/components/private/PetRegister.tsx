import { Input } from '../Input';
import { RootState, useAppDispatch } from '../../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerPetFormRules } from '../../helpers';
import { registerPetThunk } from '../../api/pet';
import { PetData } from '../../types/Pet.types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const PetRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<PetData>({ mode: 'all' });
    const id = useSelector((state: RootState) => state.authReducer.userInfo?.id)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<PetData> = (data) => {
        const body: PetData = {
            ...data,
            owner: {
                id
            },
        }
        dispatch(registerPetThunk(body))

        navigate('/mascotas', {replace: true})

    };
    return (
        <div className='register'>
            {/* <div>{userInfo}</div> */}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form__title'>Registra tu Mascota</h2>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.name} name={"name"} label={"Nombre"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.high} name={"high"} label={"Altura"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.weight} name={"weight"} label={"Peso"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.species} name={"species"} label={"Especie"} type='text' icon={null}/>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.breed} name={"breed"} label={"Raza"} type='text' icon={null}/>
                <input type='submit' className='btn btn--form' value="Registrarse" />
            </form>
        </div>

    )
}





