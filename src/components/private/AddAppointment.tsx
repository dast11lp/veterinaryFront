import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../app/store';
import { getListAppointmentsThunk, getListHoursThunk, reserveAppointmentThunk } from '../../api/appointments';
import { useSelector } from 'react-redux';
import { resetAppointmentSlice } from '../../features/appointment/getAppointmentSlice';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

// id de la fecha seleccioanda en el select
interface appointmentTime {
    appointmentTime: number;
}

export const AddAppointment = () => {

    const { idPet } = useParams()
    const { handleSubmit, control } = useForm<appointmentTime>();

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const listAppointments = useSelector((state: RootState) => state.getAppointmentsReducer.listAppointments)
    const listHours = useSelector((state: RootState) => state.getAppointmentsReducer.listHours)
    const idUser = useSelector((state: RootState) => state.authReducer.userInfo?.id)
    const [appointment] = useState<Dayjs | null>(dayjs());
    const [date, setDate] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState(true)


    const shouldDisableDate = (calendarDate: Dayjs) => {
        return !Object.keys(listAppointments).some((appointDate) => appointDate === calendarDate.toDate().toLocaleDateString())
    }


    const handleDate = (calendarDate: Dayjs) => {
        const myDate: string = calendarDate.toDate().toLocaleDateString();
        setDate(myDate);
        dispatch(getListHoursThunk({ date: myDate, id: idUser }))
    }

    const onSubmit = (data: appointmentTime) => {
        const appointData = {
            idAppoint: data.appointmentTime,
            idUser,
            idPet
        }
        dispatch(reserveAppointmentThunk(appointData))
        navigate('/mascotas', {replace: true})
    }

    useEffect(() => {
        dispatch(resetAppointmentSlice())
    }, [])

    useEffect(() => {
        if (listAppointments.length === 0)
            dispatch(getListAppointmentsThunk(idUser))
    }, [listAppointments, dispatch])

    const dateCalendarStyles = {
        "& .MuiButtonBase-root": {
            fontSize: '1.6rem',
        },
        "& .MuiTypography-root": {
            fontSize: '1.6rem',
        },
        "& .MuiPickersYear-yearButton": {
            fontSize: '1.6rem',
        },
        "& .css-31ca4x-MuiPickersFadeTransitionGroup-root": {
            fontSize: '1.6rem',
        },
    };

    return (
        <div className='add-Appointment'>
            <h2>Agendar cita para</h2>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DateCalendar
                        sx={dateCalendarStyles}
                        value={appointment}
                        onChange={(newValue) => handleDate(newValue)}
                        minDate={dayjs()}
                        shouldDisableDate={shouldDisableDate} />
                </DemoContainer>
            </LocalizationProvider>



            <form onSubmit={handleSubmit(onSubmit)} className='select-hour'>
                <h4>Fecha: {date}</h4>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Hora de la cita</InputLabel>
                    <Controller
                        name='appointmentTime'
                        control={control}
                        defaultValue={listHours && listHours.length > 0 ? listHours[0].id : 0}
                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Hora de la cita"
                                onChange={(e) => {
                                    setIsDisabled(false);
                                    field.onChange(e);
                                }}
                            >
                                {listHours && listHours.map((appoint) => (
                                    <MenuItem key={appoint.id} value={appoint.id}>{appoint.hour}</MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>
                <input
                    type="submit"
                    value="Enviar"
                    disabled={isDisabled}
                    className={`btn ${isDisabled ? 'btn--disabled' : ""}`} />
            </form>
        </div>

    )
}
