import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/store';
import { getListAppointmentsThunk, reserveAppointmentThunk } from '../api/appointments';
import { useSelector } from 'react-redux';
import { resetAppointmentSlice } from '../features/appointment/getAppointmentSlice';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';


export const AddAppointment = () => {

    const { idPet } = useParams()
    const { handleSubmit, control, register } = useForm()

    const dispatch = useAppDispatch()
    const listAppointments = useSelector((state) => state.getAppointmentsReducer.listAppointments)

    const [appointment] = useState<Dayjs | null>(dayjs());
    const [date, setDate] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)


    const shouldDisableDate = (calendarDate) => {
        return !Object.keys(listAppointments).some((appointDate) => appointDate === calendarDate.$d.toLocaleDateString())
    }

    const handleDate = (calendarDate) => {
        const myDate = calendarDate.$d.toLocaleDateString()
        const filteredAppointments = Object.keys(listAppointments)
            .filter(key => key === myDate)
            .map(key => listAppointments[key])
            .flat();

        setDate(filteredAppointments);
    }

    const onSubmit = (data) => {

        const appointData = {
            idAppoint: data.appointmentTime,
            idUser: JSON.parse(localStorage.getItem("userInfo")).id,
            idPet
        }
        dispatch(reserveAppointmentThunk(appointData))
    }

    useEffect(() => {
        dispatch(resetAppointmentSlice())
    }, [])

    useEffect(() => {
        if (listAppointments.length === 0)
            dispatch(getListAppointmentsThunk())
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
                <h4>Fecha: {date.length > 0 && date[0].date}</h4>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Hora de la cita</InputLabel>
                    <Controller
                        name='appointmentTime'
                        control={control}
                        defaultValue={date && date.length > 0 ? date[0].id : ""}
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
                                {date && date.map((appoint) => (
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
