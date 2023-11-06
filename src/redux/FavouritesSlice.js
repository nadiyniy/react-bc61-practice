import { createSlice } from '@reduxjs/toolkit';
import { removeToTrash } from './trashSlice';

const initialState = {
	books: [],
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addBook: (state, { payload }) => {
			state.books.push(payload);
		},
		deleteBook: (state, { payload }) => {
			const index = state.books.findIndex((book) => book.id === payload);
			state.books.splice(index, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(removeToTrash, (state, { payload }) => {
			state.books = state.books.filter((item) => item.id !== payload.id);
		});
	},
});

export const { addBook, deleteBook } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
