import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/store';
import { getListAppointmentsThunk } from '../api/appointments';
import { useSelector } from 'react-redux';


export const AddAppointment = () => {

    const dispatch = useAppDispatch()
    const listAppointments = useSelector((state) => state.appointmentReducer.listAppointments)

    const [appointment, setAppointment] = useState<Dayjs | null>(dayjs());


    useEffect(() => {
        if (listAppointments.length === 0)
            dispatch(getListAppointmentsThunk())
        console.log(listAppointments);
    }, [listAppointments])

    useEffect(() => {
        if (appointment) {
            // console.log(Intl.DateTimeFormat().format((appointment.$d)))
        }
    }, [appointment])

    return (
        <div className='add-Appointment'>
            <h2>Agendar cita para</h2>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    {/* <DemoItem label="Controlled calendar"> */}
                    <div>
                        <DateCalendar sx={{
                            "& .MuiButtonBase-root, & .MuiTypography-root, & .MuiPickersYear-yearButton ,& .css-31ca4x-MuiPickersFadeTransitionGroup-root": {
                                fontSize: '1.6rem',
                            }
                        }} value={appointment} onChange={(newValue) => setAppointment(newValue)} minDate={dayjs()} />
                    </div>
                    {/* </DemoItem> */}
                </DemoContainer>
            </LocalizationProvider>
        </div>

    )
}
