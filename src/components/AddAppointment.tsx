import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/store';
import { getListAppointmentsThunk } from '../api/appointments';
import { useSelector } from 'react-redux';
import { resetAppointmentSlice } from '../features/appointment/appointmentSlice';


export const AddAppointment = () => {

    const dispatch = useAppDispatch()
    const listAppointments = useSelector((state) => state.appointmentReducer.listAppointments)

    const [appointment, setAppointment] = useState<Dayjs | null>(dayjs());
    const [selectedDate, setSelectedDate] = useState()

    const shouldDisableDate = (date) => {
        return !listAppointments.some((appoint) => appoint.date === date.$d.toLocaleDateString())
    }

    const handleDate = (newValue) => {
        // setDate(newValue.$d.toLocaleDateString());
        console.log(newValue.$d.toLocaleDateString());
        
    }

    useEffect(() => {
        dispatch(resetAppointmentSlice())
    }, [])



    useEffect(() => {
        if (listAppointments.length === 0)
            dispatch(getListAppointmentsThunk())
    }, [listAppointments, dispatch])

    return (
        <div className='add-Appointment'>
            <h2>Agendar cita para</h2>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <div>
                        <DateCalendar sx={{
                            "& .MuiButtonBase-root, & .MuiTypography-root, & .MuiPickersYear-yearButton ,& .css-31ca4x-MuiPickersFadeTransitionGroup-root": {
                                fontSize: '1.6rem',
                            }
                        }} value={appointment} onChange={(newValue) => handleDate(newValue)} minDate={dayjs()} shouldDisableDate={shouldDisableDate} />
                    </div>
                </DemoContainer>
            </LocalizationProvider>
        </div>

    )
}
