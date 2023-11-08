export const selectBooks = (state) => state.books.books;

// favourites
export const selectFavouritesBooks = (state) => state.favourites.books;

export const selectError = (state) => state.favourites.error;

export const selectLoading = (state) => state.favourites.loading;

// filter
export const selectFilter = (state) => state.filter.filter;

// trash
export const selectTrash = (state) => state.trash.items;
