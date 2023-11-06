export const selectBooks = (state) => state.books.books;

// favourites
export const selectFavouritesBooks = (state) => state.favourites.books;

// filter
export const selectFilter = (state) => state.filter.filter;

// trash
export const selectTrash = (state) => state.trash.items;
