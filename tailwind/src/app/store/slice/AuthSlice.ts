// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   isAutherized: false,
// };

// const AuthSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducer: {
//     login: (state, action) => {
//       state.user = action.payload;
//       state.isAutherized = true;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAutherized = false;
//     },
//   },
// });

// export const { login, logout } = AuthSlice.actions;
// export const authReducer = AuthSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  username: string;
  password: string;
}
interface AuthState {
  user: User | null;
  isAuthorized: boolean;
}
const initialState: AuthState = {
  user: null,
  isAuthorized: false,
};
const hardcodedUser: User = {
  username: "user",
  password: "user@123",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      // state.user = action.payload;
      state.user = hardcodedUser;
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthorized = false;
    },
  },
});
export const { login, logout } = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
