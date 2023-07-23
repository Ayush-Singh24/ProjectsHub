import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

import { alertReducer } from "./reducers/alert";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});
