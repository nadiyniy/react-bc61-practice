import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { deleteOneBookFromArchive, fetchArchive } from "./operations";

const initialState = {
  items: [],
};

export const trashSlice = createSlice({
  name: "trash",
  initialState,
  reducers: {
    removeToTrash: {
      prepare: (item) => {
        return {
          payload: {
            ...item,
            deletedAt: moment().format("DD.MM.YYYY HH.MM.SS"),
          },
        };
      },

      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArchive.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteOneBookFromArchive.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex((item) => item.id === payload.id);
        state.items.splice(index, 1);
      });
  },
});

export const { removeToTrash } = trashSlice.actions;
export const trashReducer = trashSlice.reducer;
