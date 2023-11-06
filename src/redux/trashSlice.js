import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
	items: [],
};

export const trashSlice = createSlice({
	name: 'trash',
	initialState,
	reducers: {
		removeToTrash: {
			prepare: (item) => {
				return {
					payload: {
						...item,
						deletedAt: moment().format('DD.MM.YYYY HH.MM.SS'),
					},
				};
			},

			reducer: (state, { payload }) => {
				state.items.push(payload);
			},
		},
	},
});

export const { removeToTrash } = trashSlice.actions;
export const trashReducer = trashSlice.reducer;
