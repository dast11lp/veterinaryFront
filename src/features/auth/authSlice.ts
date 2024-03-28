import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerUserThunk } from "../../api/auth";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Authorization {
  Authorization: string;
  id: string;
}

export interface authState {
  loading: boolean,
  userInfo: object,
  userToken: string | null,
  error: boolean | null | object, 
  success: boolean,
}

const initialState: authState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //Register Handlers 
    builder.addCase(registerUserThunk.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(registerUserThunk.fulfilled, (state, action: PayloadAction<Authorization> ) => {
      state.userToken = action.payload.Authorization
      state.loading = false;
      state.error = true;
    })
    builder.addCase(registerUserThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })

    // Login Handlers 
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<Authorization>) => {
      state.userToken = action.payload.Authorization
      state.userInfo = {
        id: action.payload.id
      }
      localStorage.setItem("userInfo", JSON.stringify({
        id: action.payload.id
      }))
      localStorage.setItem("token", action.payload.Authorization)
      state.error = false;
      state.loading = false;
    })
    builder.addCase(loginThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export default authSlice.reducer;
