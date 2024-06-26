import { createSlice } from "@reduxjs/toolkit"
import { getPetAppointmentsThunk } from "../../api/appointments"
import { Appointment } from "../../types/Appointment";

export interface initialState {
    myPetAppointments: Appointment[];
    loading: boolean | null;
    error: boolean | null;
}


const initialState: initialState = {
    myPetAppointments: [],
    loading: false,
    error: false,
}

const getPetAppointmentsSlice = createSlice({
    name: "getPetAppointmentsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPetAppointmentsThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        builder.addCase(getPetAppointmentsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.myPetAppointments = action.payload
        })

        builder.addCase(getPetAppointmentsThunk.rejected, (state) => {
            state.loading = false;
            state.error = false;
        })
    }
})

export default getPetAppointmentsSlice.reducer