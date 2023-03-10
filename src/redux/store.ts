import { combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";
import reducers from "./reducers/reducers";

import { configureStore } from "@reduxjs/toolkit";
// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

const initailState = {};
const allReducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
  reducers: reducers,
});

const store = configureStore({
  reducer: allReducers,
  middleware: process.env.NODE_ENV !== "production" ? [thunk, logger] : [thunk],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initailState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
