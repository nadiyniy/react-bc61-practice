import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6549fab3e182221f8d524207.mockapi.io";

const instance = axios.create({
  baseURL: "https://654a3566e182221f8d52babf.mockapi.io/",
});

export const fetchFavoritesThunk = createAsyncThunk(
  "fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("favorites");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addToFavoriteThunk = createAsyncThunk(
  "addFavorite",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post("favorites", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteFromFavorite = createAsyncThunk(
  "deleteFavorite",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`favorites/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchArchive = createAsyncThunk(
  "removeToArchive",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("archive");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteOneBookFromArchive = createAsyncThunk(
  "deleteFromArchive",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`archive/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
