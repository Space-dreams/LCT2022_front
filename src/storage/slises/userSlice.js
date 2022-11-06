import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: JSON.parse(sessionStorage.getItem('token')) || null,
  id: JSON.parse(sessionStorage.getItem('id')) || null,
  user: JSON.parse(sessionStorage.getItem('userLCT')) || {
    nickName: null,
    role: null,
    fullName: null,
    dateofbirth: null,
    country: null,
    citizenship: null,
    gender: null,
    email: null,
    agreement: null,
    education: null,
    employment: null,
    experience: null,
    achievements: null,
    profession: null,
    stack: null,
    roleInCommand: null,
    command: null,
    status: null
  }

};


export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (id) => {
    const userForf = {
      nickName: null,
      role: null,
      fullName: null,
      dateofbirth: null,
      country: null,
      citizenship: null,
      gender: null,
      email: null,
      agreement: null,
      education: null,
      employment: null,
      experience: null,
      achievements: null,
      profession: null,
      stack: null,
      roleInCommand: null,
      command: null,
      status: null
    }
    const response = await fetch(`/api/v1/profile/${id}/`)
      .then((data) => data.json())
      .then((data) => {
        userForf.nickName = data.nick_name
        userForf.role = data.role
        userForf.fullName = data.full_name
        userForf.dateofbirth = data.dateofbirth
        userForf.country = !(data.country === '') ? JSON.parse(data.country) : ''
        userForf.citizenship = !(data.citizenship === '') ? JSON.parse(data.citizenship) : ''
        userForf.gender = !(data.gender === '') ? JSON.parse(data.gender) : ''
        userForf.email = data.email
        userForf.agreement = data.agreement
        userForf.education = !(data.education === '') ? JSON.parse(data.education) : ''
        userForf.employment = !(data.employment === '') ? JSON.parse(data.employment) : ''
        userForf.experience = !(data.experience === '') ? JSON.parse(data.experience) : ''
        userForf.achievements = data.achievements
        userForf.profession = !(data.profession === '') ? JSON.parse(data.profession) : ''
        userForf.stack = !(data.stack === '') ? JSON.parse(data.stack) : ''
        userForf.roleInCommand = data.role_in_command
        userForf.command = data.command
        userForf.status = !(data.status === '') ? JSON.parse(data.status) : ''
        sessionStorage.setItem('userLCT', JSON.stringify(userForf))
        return userForf
      })
    return response;
  }
);


export const fetchUserLogin = createAsyncThunk(
  'user/fetchUserLogin',
  async ([password, email]) => {

    const response = await fetch('/api/v1/auth/token/login/', {
      method: 'POST',
      body: JSON.stringify({
        "password": password,
        "email": email,
      }),
      headers: { "content-type": "application/json" }
    })
      .then((data) => data.json())
      .then((data) => {
        sessionStorage.setItem('token', JSON.stringify(data.auth_token))
        sessionStorage.setItem('id', JSON.stringify(data.id))
        return data
      })
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    logOut: (state) => {
      state.token = null;
      state.id = null;
      state.user = null;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {

      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.token = action.payload.auth_token;
        state.id = action.payload.id;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
});

export const { setUser, logOut } = userSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };


export default userSlice.reducer;
