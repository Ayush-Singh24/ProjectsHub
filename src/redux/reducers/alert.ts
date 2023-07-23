import { AlertStatus } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alertSlice",
  initialState: {
    alertMessage: "",
    status: AlertStatus.Success,
    isOpen: false,
  },
  reducers: {
    openAlert(
      state,
      action: PayloadAction<{ message: string; status: string }>
    ) {
      state.alertMessage = action.payload.message;
      state.status = action.payload.message;
    },
    closeAlert(state) {
      state.isOpen = false;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;
