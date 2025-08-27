import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user.type";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUserProfile } = authSlice.actions;

export default authSlice.reducer;
