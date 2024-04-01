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

    const [appointment] = useState<Dayjs | null>(dayjs());
    const [hours, setHours] = useState([]);

    const shouldDisableDate = (calendarDate) => {
        return !Object.keys(listAppointments).some((appointDate) => appointDate === calendarDate.$d.toLocaleDateString())
    }

    const handleDate = (calendarDate) => {
        setHours([])
        const myDate = calendarDate.$d.toLocaleDateString()

        Object.keys(listAppointments).forEach((key, i) => {
            if (myDate === key) {

                listAppointments[key].forEach((el) => {
                    console.log(el.hour);
                    
                    setHours((prevHours => [...prevHours, el.hour]))
                });
            }
        })
    }

    useEffect(() => {
        dispatch(resetAppointmentSlice())
    }, [])

    useEffect(()=> {}, [hours])


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
                        <h2>Hora de la Cita</h2>
            < select name="" id="">
                <option value="">----</option>
                {hours.length > 0 && hours.map((hour) => (
                    <>
                        <option value="hours">{hour}</option>
                    </>
                ))}
            </select>
        </div>

    )
}
