import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slises/userSlice';
import dataReduser from './slises/dataSlise';

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReduser
  },
});