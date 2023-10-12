import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { IRegisterResponse, UserResponse } from "./interface";
import { ILogin, ILoginSocial, ISignUp } from "@/interface";
import { getItemLocalStorage } from "@/utils/localStorageUtil";

interface LoginState {
  info: UserResponse;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
  registerresponse: IRegisterResponse;
}

const initialState: LoginState = {
  isLoading: false,
  error: "",
  isLoggedIn: false,
  info: {
    user: {
      id: "",
      email: "",
      fullName: "",
      avatarUrl: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "",
    },
    token: {
      accessToken: "",
      refreshToken: "",
    },
  },
  registerresponse: {
    message: "",
    statusCode: null,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginHome: (state, action: PayloadAction<ILogin>) => {
      state.isLoading = true;
    },
    loginHomeSuccess: (state, action: PayloadAction<UserResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.isLoggedIn = true;
      state.info = action.payload;
    },
    loginHomeFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },

    loginBySocial: (state, action: PayloadAction<ILoginSocial>) => {
      state.isLoading = true;
    },
    loginBySocialSuccess: (state, action: PayloadAction<UserResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.isLoggedIn = true;
      state.info = action.payload;
    },
    loginBySocialFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    signUp: (state, action: PayloadAction<ISignUp>) => {
      state.isLoading = true;
    },
    signUpSuccess: (state, action: PayloadAction<IRegisterResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.isLoggedIn = true;
      state.registerresponse = action.payload;
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const {
  loginHome,
  loginHomeSuccess,
  loginHomeFailure,
  loginBySocial,
  loginBySocialSuccess,
  loginBySocialFailure,
  signUp,
  signUpSuccess,
  signUpFailure,
} = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoading = (state: RootState) => state.login.isLoading;
export const selectError = (state: RootState) => state.login.error;
export const selectAgentInfor = (state: RootState) => state.login.info;
export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;
export const selectRegister = (state: RootState) =>
  state.login.registerresponse;

export default loginSlice.reducer;
