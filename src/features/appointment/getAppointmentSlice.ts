import { createSlice } from "@reduxjs/toolkit"
import { getListAppointmentsThunk, getListHoursThunk } from "../../api/appointments";

const initialState = {
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

        builder.addCase(getListAppointmentsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            const map = new Map();

            // create an map with date as key and its array of hours as value
            action.payload.forEach((el) => {
                const date = new Date(el.date).toLocaleDateString();
                if (!map.has(date)) {
                    map.set(date, [])
                }
                map.get(date).push({ ...el, date })
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