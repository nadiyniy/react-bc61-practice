import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./posts/postsSlice";
import { userReducer } from "./user/userSlice";
import { authReduser } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
