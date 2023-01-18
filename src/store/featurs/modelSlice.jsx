import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModel: false,
}

const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        modelOpen: (state, action)=>{
            state.isModel = true;
        },
        modelClose: (state, action)=>{
            state.isModel = false;
        },
    },
})
export const { modelOpen, modelClose } = modelSlice.actions;

export default modelSlice.reducer;