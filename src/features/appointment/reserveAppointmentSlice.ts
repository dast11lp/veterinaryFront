import { createSlice } from "@reduxjs/toolkit";
import { reserveAppointmentThunk } from "../../api/appointments";

const initialState = {
    appointment: null,
    loading: false,
    error: false,
}

const reserveAppointmentSlice = createSlice({
    name: "reserveAppointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(reserveAppointmentThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(reserveAppointmentThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.appointment = action.payload
         })
        builder.addCase(reserveAppointmentThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export default reserveAppointmentSlice.reducer