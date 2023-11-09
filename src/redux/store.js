import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./posts/postsSlice";
import { userReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
