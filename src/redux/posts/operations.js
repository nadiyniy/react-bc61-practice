import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://654a2082e182221f8d528c04.mockapi.io/";

export const fetchPostsThunk = createAsyncThunk(
  "fetchPosts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("posts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deletePostsThunk = createAsyncThunk(
  "deletePost",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`posts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addPostThunk = createAsyncThunk(
  "addPost",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post("posts", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
