import { createSlice } from "@reduxjs/toolkit";

// Load auth state from localStorage
const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return {
        isUserPresent: false,
        userName: "",
        userEmail: "",
        userToken: "",
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      isUserPresent: false,
      userName: "",
      userEmail: "",
      userToken: "",
    };
  }
};

const initialState = loadAuthState();

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
      // Save to localStorage
      localStorage.setItem('authState', JSON.stringify(state));
    },
    register: (state, action) => {
      // same as login
      const { isUserPresent, userName, userEmail, userToken } = action.payload;
      state.isUserPresent = isUserPresent;
      state.userName = userName;
      state.userEmail = userEmail;
      state.userToken = userToken;
      // Save to localStorage
      localStorage.setItem('authState', JSON.stringify(state));
    },
    logout: (state) => {
      state.isUserPresent = false;
      state.userName = "";
      state.userEmail = "";
      state.userToken = "";
      // Clear localStorage
      localStorage.removeItem('authState');
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
