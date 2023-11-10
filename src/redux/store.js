import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./posts/postsSlice";
import { userReducer } from "./user/userSlice";
import { authReduser } from "./auth/slice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    auth: authReduser,
  },
});
