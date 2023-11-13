import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, refreshThunk, registerThunk } from "./operation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        // state.user.name = payload.user.name;
        // state.user.email = payload.user.email;
        state.user = { ...payload };
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      });
  },
});
export const authReduser = slice.reducer;
