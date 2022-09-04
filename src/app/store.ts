import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { mainReducer, userReducer, themeReducer } from './features/';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    userReducer: userReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
