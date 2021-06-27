import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { favoriteReducer } from "./slices/favorites";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "store-v1",
  storage,
};

const reducer = combineReducers({
  favorites: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
