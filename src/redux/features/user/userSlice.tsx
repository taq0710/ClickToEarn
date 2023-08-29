import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IUserDetail } from './interface';
import { RootState } from '@/redux/store';

const initialState: any = {
  isLoading: false,
  error: '',
  info: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getProfile: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    getProfileSuccess: (state, action: PayloadAction<IUserDetail>) => {
      state.isLoading = false;
      state.error = '';
      state.detail = action.payload;
    },
    getProfileFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
  },
});

export const {
  getProfile,
  getProfileSuccess,
  getProfileFailure,
} = userSlice.actions;

export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;
export const selectInfo = (state: RootState) => state.user.info;

export default userSlice.reducer;
