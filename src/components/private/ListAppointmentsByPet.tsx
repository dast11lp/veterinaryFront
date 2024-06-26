import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../app/store'
import { useParams } from 'react-router-dom'
import { getPetAppointmentsThunk } from '../../api/appointments'

export const ListAppointmentsByPet = () => {

    const { idPet, namePet } = useParams()
    const dispatch = useAppDispatch();
    const petAppointments = useSelector((state: RootState) => state.getPetAppointmentsReducer.myPetAppointments)


    useEffect(() => {
        dispatch(getPetAppointmentsThunk(idPet))
    }, [])

    return (
        <div>
            <h2>Lista de Citas de {namePet}</h2>
            {Array.isArray(petAppointments) && petAppointments.length > 0 ? (
                <div className=''>
                    <p><strong>Fecha: </strong>{petAppointments[0]?.date}</p>
                    <p><strong>Hora: </strong>{petAppointments[0]?.hour}</p>
                    <p><strong>Veterinario: </strong>{petAppointments[0]?.veterinarian?.firstname}</p>
                </div>
            ) : (
                <p>No hay citas Agendadas</p>
            )}
        </div>
    )
}
