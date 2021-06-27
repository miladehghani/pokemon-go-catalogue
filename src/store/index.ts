import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./slices/favorites";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
