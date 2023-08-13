import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authReducerInterface {
  isAuth: boolean | null;
  isLoading: boolean;
}

const InitialState: authReducerInterface = {
  isAuth: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: InitialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean | null>) {
      state.isAuth = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsAuth, setIsLoading } = authSlice.actions;
export const authReducer = authSlice.reducer;
