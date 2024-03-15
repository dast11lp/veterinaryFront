import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  id: string;
}

const initialState: authState = {
  id: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setId: () => {},
  },
});

export const { setId } = authSlice.actions;
export default authSlice.reducer;
