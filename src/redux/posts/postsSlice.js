import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [{ id: "1", title: "Hello", body: "Lorem ipsum" }],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {},
});

export const postReducer = postSlice.reducer;
