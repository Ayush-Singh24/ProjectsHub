import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authReducerInterface {
  isAuth: boolean | null;
}

const InitialState: authReducerInterface = {
  isAuth: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: InitialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean | null>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
