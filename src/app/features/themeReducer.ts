import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { mode } from "./utils/fetchLocalStorage";

export type mainState = {
  isDark: boolean;
}

const initialState: mainState = {
  isDark: mode || false,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleIsDark: (state) => {
      state.isDark = !state.isDark;
    },
  }
} )

export const { toggleIsDark } = themeReducer.actions;

export const selectIsDark = (state: RootState) => state.theme.isDark;

export default themeReducer.reducer;