import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    profession: [],
    stacks: []
};

export const setProfession = createAsyncThunk(
    'user/setProfession',
    async () => {
        const response = await fetch('/api/v1/profession/')
            .then((data) => data.json());
        return response;
    }
);

export const setStacks = createAsyncThunk(
    'user/setStacks',
    async () => {
        const response = await fetch('/api/v1/stacks/')
            .then((data) => data.json());
        return response;
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(setProfession.fulfilled, (state, action) => {
                state.profession = action.payload;
            })
            .addCase(setStacks.fulfilled, (state, action) => {
                state.stacks = action.payload;
            });
    },
});



export default dataSlice.reducer
