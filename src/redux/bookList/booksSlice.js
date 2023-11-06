import { createSlice } from '@reduxjs/toolkit';
import booksData from '../../assets/books.json';
import { removeToTrash } from '../trashSlice';

const initialState = {
	books: booksData,
};

export const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(removeToTrash, (state, { payload }) => {
			state.books = state.books.filter((item) => item.id !== payload.id);
		});
	},
});

export const bookReducer = bookSlice.reducer;
// export const bookReducer =
