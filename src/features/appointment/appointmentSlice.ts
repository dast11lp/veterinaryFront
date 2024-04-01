import { createSlice } from "@reduxjs/toolkit"
import { getListAppointmentsThunk } from "../../api/appointments";

const initialState = {
    listAppointments: [],
    loading: false,
    error: false,
}

const appointmentSlice = createSlice({
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
        builder.addCase(getListAppointmentsThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        builder.addCase(getListAppointmentsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            const map = new Map ();

            action.payload.forEach((el)=> {
                // create an map with date as key and its array of hours as value
                const date = new Date(el.date).toLocaleDateString();
                if(!map.has(date)) {
                    map.set(date, [])
                }
                map.get(date).push({... el, date})
            })
            state.listAppointments = Object.fromEntries(map);
        })

        builder.addCase(getListAppointmentsThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export default appointmentSlice.reducer;

export const { resetAppointmentSlice } = appointmentSlice.actions;