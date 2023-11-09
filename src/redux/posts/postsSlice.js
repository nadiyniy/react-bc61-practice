import { createSlice } from "@reduxjs/toolkit";
import { addPostThunk, deletePostsThunk, fetchPostsThunk } from "./operations";

const initialState = {
  posts: [{ id: "1", title: "Hello", body: "Lorem ipsum" }],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(deletePostsThunk.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter((post) => post.id !== payload.id);
      })
      .addCase(addPostThunk.fulfilled, (state, { payload }) => {
        state.posts.push(payload);
      });
  },
});

export const postReducer = postSlice.reducer;
