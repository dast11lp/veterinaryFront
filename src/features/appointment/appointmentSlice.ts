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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListAppointmentsThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        builder.addCase(getListAppointmentsThunk.fulfilled, (state, action) => {
            state.listAppointments = action.payload;
            state.loading = false;
            state.error = false;
        })
    }
})

export default appointmentSlice.reducer;