import { configureStore } from '@reduxjs/toolkit';
import authSlicse from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth:authSlicse
  },
});
