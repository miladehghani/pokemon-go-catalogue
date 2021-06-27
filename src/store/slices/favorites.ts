import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceKeys } from "types/sliceKeys";
import { FavoritesState } from "types/sliceTypes";

const initialState: FavoritesState = {};

export const favoriteSlice = createSlice({
  name: SliceKeys.favorites,
  initialState,
  reducers: {
    addToFavorite: (favorites: any, action: PayloadAction<any>) => {
      const resource = action.payload;
      favorites[resource.url] = !!favorites[resource.url]
        ? !favorites[resource.url]
        : true;
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
