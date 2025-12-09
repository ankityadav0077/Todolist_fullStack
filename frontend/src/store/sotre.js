import { configureStore } from '@reduxjs/toolkit';
import authSlicse from '../features/auth/authSlice'
import todoSlice from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    auth: authSlicse,
    todos: todoSlice
  },
});
