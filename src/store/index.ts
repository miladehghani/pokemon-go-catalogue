import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { favoriteReducer } from "./slices/favorites";

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
