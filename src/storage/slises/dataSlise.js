import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    profession: null
};

export const setProfession = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        const response = await fetch('/api/v1/profession/')
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
            });
    },
});



export default dataSlice.reducer
