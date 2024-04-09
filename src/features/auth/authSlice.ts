import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerUserThunk } from "../../api/auth";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Authorization {
  Authorization: string;
  id: string;
}

export interface authState {
  loading: boolean,
  userInfo: Authorization | null,
  userToken: string | null,
  error: boolean | null | object,
  success: boolean,
}

const initialState: authState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    verifyAuth: (state) => {
      const token = localStorage.getItem("token")
      const userInfoString = localStorage.getItem("userInfo");

      if (userInfoString !== null) {
        const id = JSON.parse(userInfoString);
        state.userInfo = id;
      } else {
        throw Error("userInfoString is null ")
      }

      if (token !== null) {
        state.userToken = token;
      } else {
        throw Error("token is null ")
      }
    }
  },
  extraReducers: (builder) => {
    //Register Handlers 
    builder.addCase(registerUserThunk.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(registerUserThunk.fulfilled, (state, action: PayloadAction<Authorization>) => {
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
        Authorization : action.payload.Authorization,
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
export const { verifyAuth } = authSlice.actions;

