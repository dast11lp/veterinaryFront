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

            action.payload.forEach((el) => {
                const date = new Date(el.date).toLocaleDateString();
                state.listAppointments.push({...el, date})
            });
        })

        builder.addCase(getListAppointmentsThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export default appointmentSlice.reducer;

export const { resetAppointmentSlice } = appointmentSlice.actions;