import { createSlice } from "@reduxjs/toolkit"
import { getPetListThunk } from "../../api/pet"
import { PetData } from "../../types/Pet.types"

interface initialState {
    loading: boolean,
    error: boolean,
    petList: PetData[],
}

const initialState: initialState = {
    loading: false,
    error: false,
    petList: [],
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