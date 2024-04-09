import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getListAppointmentsThunk, getListHoursThunk } from "../../api/appointments";
import { Appointment, hourDate } from "../../types/Appointment";


export interface initialState {
    listHours: hourDate[];
    listAppointments: Appointment[];
    loading: boolean | null;
    error: boolean | null;
}


const initialState: initialState = {
    listAppointments: [],
    listHours: [],
    loading: false,
    error: false,
}

const getAppointmentsSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        resetAppointmentSlice: (state) => {
            state.listAppointments = [];
            state.loading = false;
            state.error = false;
        }
    },
    extraReducers: (builder) => {
        // fulldates
        builder.addCase(getListAppointmentsThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        builder.addCase(getListAppointmentsThunk.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
            state.loading = false;
            state.error = false;
            const map = new Map();

            // create an map with date as key and its array of hours as value
            action.payload.forEach((el) => {
                const date = new Date(el.date);
                date.setDate(date.getDate() + 1)
                const formatdate = date.toLocaleDateString();
                if (!map.has(formatdate)) {
                    map.set(formatdate, [])
                }
                map.get(formatdate).push({ ...el, formatdate })
            })
            state.listAppointments = Object.fromEntries(map);
        })

        builder.addCase(getListAppointmentsThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        /// Hours
        builder.addCase(getListHoursThunk.pending, (state) => {
            state.error = false;
            state.loading = true;
        })

        builder.addCase(getListHoursThunk.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.listHours = action.payload;
        })

        builder.addCase(getListHoursThunk.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
    }
})

export default getAppointmentsSlice.reducer;

export const { resetAppointmentSlice } = getAppointmentsSlice.actions;