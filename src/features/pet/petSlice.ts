import { createSlice } from "@reduxjs/toolkit"
import { getPetListThunk } from "../../api/pet"



const initialState = {
    loading: false,
    error: false,
    success: false,
    petList: null,
}

const petSlice = createSlice({
    name: "pet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPetListThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(getPetListThunk.fulfilled, (state, action)  => {
            state.loading = false;
            state.error = false;
            state.petList = action.payload
        }) 

        builder.addCase(getPetListThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export default petSlice.reducer