import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books";
import themeReducer from "./theme";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
