import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { IUserDetail } from "./interface";

interface AgencyState {
  isLoading: boolean;
  error: string;
  info: IUserDetail | null
}

const initialState: AgencyState = {
  isLoading: false,
  error: "",
  info: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<IUserDetail>) => {
      state.isLoading = false;
      state.error = "";
      state.info = action.payload;
      // debugger;
    },
    getUserFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUser,
  getUserFailure,
  getUserSuccess
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;
export const selectInfor = (state: RootState) => state.user.info;

export default userSlice.reducer;
