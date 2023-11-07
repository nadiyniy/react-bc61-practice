import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { bookReducer } from './bookList/booksSlice'
import { favouritesReducer } from './FavouritesSlice'
import { filterReducer } from './filterSlice'
import { trashReducer } from './trashSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	books: bookReducer,
	favourites: favouritesReducer,
	filter: filterReducer,
	trash: trashReducer,
})

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
