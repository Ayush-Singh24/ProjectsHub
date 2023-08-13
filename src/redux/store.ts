import { configureStore } from "@reduxjs/toolkit";

import { alertReducer } from "./reducers/alert";
import { authReducer } from "./reducers/auth";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
