import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import petReducer from "../features/pet/petSlice";
import getAppointmentsReducer from "../features/appointment/getAppointmentSlice";
import reserveAppointmentReducer from "../features/appointment/reserveAppointmentSlice";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export const store = configureStore({
  reducer: {
    authReducer,
    petReducer,
    getAppointmentsReducer,
    reserveAppointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
