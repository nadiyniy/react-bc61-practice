import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    isLoggedIn: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user.name = payload;
      state.user.isLoggedIn = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
