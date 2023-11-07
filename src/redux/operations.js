import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6549fab3e182221f8d524207.mockapi.io';

export const fetchFavoritesThunk = createAsyncThunk('fetchAll', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('favorites');
		return data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});
export const addToFavoriteThunk = createAsyncThunk('addFavorite', async (body, thunkApi) => {
	try {
		const { data } = await axios.post('favorites', body);
		return data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});
export const deleteFromFavorite = createAsyncThunk('deleteFavorite', async (id, thunkApi) => {
	try {
		const { data } = await axios.delete(`favorites/${id}`);
		return data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});
