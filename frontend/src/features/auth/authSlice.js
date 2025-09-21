import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserPresent: false,
  userName: "",
  userEmail: "",
  userToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { isUserPresent, userName, userEmail, userToken } = action.payload;
      state.isUserPresent = isUserPresent;
      state.userName = userName;
      state.userEmail = userEmail;
      state.userToken = userToken;
    },
    register: (state, action) => {
      // same as login
      const { isUserPresent, userName, userEmail, userToken } = action.payload;
      state.isUserPresent = isUserPresent;
      state.userName = userName;
      state.userEmail = userEmail;
      state.userToken = userToken;
    },
    logout: () => {
      return { ...initialState }; // reset to initial state
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
