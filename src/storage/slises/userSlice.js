import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false
};

export const fetchUserLogin = createAsyncThunk(
  'user/fetchUserLogin',
  async ([password, email]) => {

    const response = await fetch('http://localhost:8000/api/v1/auth/token/login/', {
      method: 'POST',
      body: JSON.stringify({
        "password": password,
        "email": email,
      }),
      headers: { "content-type": "application/json" }
    })
      .then((data) => data.json());
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => { state.isLogin = true; },
    logOut: (state) => { state.isLogin = false; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {

      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {

      });
  },
});

export const { logIn, logOut } = userSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };


export default userSlice.reducer;
