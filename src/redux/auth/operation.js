import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactApi = axios.create({
  baseURL: "https://goit-task-manager.herokuapp.com/",
});

const addToken = (token) => {
  contactApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteToken = () => {
  contactApi.defaults.headers.common.Authorization = "";
};

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
      addToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await contactApi.post("users/logout");
    deleteToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

// export const refreshThunk = createAsyncThunk ('refresh', )
