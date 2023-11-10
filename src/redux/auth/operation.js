import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactApi = axios.create({
  baseURL: "https://goit-task-manager.herokuapp.com/",
});

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await contactApi.post("users/signup", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await contactApi.post("users/login", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
