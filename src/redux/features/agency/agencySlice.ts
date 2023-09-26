import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { getItemLocalStorage } from "@/utils/localStorageUtil";
import {
  AgencyResponse,
  IAgency,
  IServices,
  IServicesResponse,
} from "./interfaces";

interface AgencyState {
  packResponse: AgencyResponse[];
  agencySelected: AgencyResponse | null;
  isLoading: boolean;
  error: string;
  packService: IServicesResponse[];
}

const initialState: AgencyState = {
  isLoading: false,
  error: "",
  packResponse: [
    {
      title: "",
      des: "",
      url: "",
      thumb: "",
      service_Packet: "",
      date: "",
      verify: "",
      status: "",
      edit: "",
      report: "",
      video: "",
    },
  ],
  agencySelected: null,
  packService: [],
};
const accessToken = getItemLocalStorage("accesstoken");

export const agencySlice = createSlice({
  name: "agency",
  initialState,
  reducers: {
    createPackAgency: (state, action: PayloadAction<IAgency>) => {
      state.isLoading = true;
    },
    createPackAgencySuccess: (state, action: PayloadAction<IAgency>) => {
      state.isLoading = false;
      state.error = "";
      state.packResponse.push(action.payload);
    },
    createPackAgencyFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPackAgency: (state, action: PayloadAction) => {
      state.isLoading = true;
    },
    getPackAgencySuccess: (state, action: PayloadAction<AgencyResponse[]>) => {
      state.isLoading = false;
      state.error = "";
      state.packResponse = action.payload;
    },
    getPackAgencyFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createPackServices: (state, action: PayloadAction<IServices>) => {
      state.isLoading = true;
    },
    createPackServicesSuccess: (state, action: PayloadAction<IServices>) => {
      state.isLoading = false;
      state.error = "";
      state.packService.push(action.payload);
    },
    createPackServicesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPackServices: (state, action: PayloadAction) => {
      state.isLoading = true;
    },
    getPackServicesSuccess: (
      state,
      action: PayloadAction<IServicesResponse[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.packService = action.payload;
    },
    getPackServicesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectedAgency: (state, action: PayloadAction<AgencyResponse>) => {
      state.agencySelected = action.payload;
    },
    editPackAgency: (state, action: PayloadAction<IAgency>) => {
      state.isLoading = true;
    },
    editPackAgencySuccess: (state, action: PayloadAction<AgencyResponse>) => {
      state.isLoading = false;
      state.error = "";
      const editedPost = action.payload;
      const existingPost = state.packResponse.find(
        (post) => post.id === editedPost.id
      );
      if (existingPost) {
        Object.assign(existingPost, editedPost);
      }
    },
    editPackAgencyFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createPackAgency,
  createPackAgencyFailure,
  createPackAgencySuccess,
  getPackAgency,
  getPackAgencyFailure,
  getPackAgencySuccess,
  createPackServices,
  createPackServicesFailure,
  createPackServicesSuccess,
  getPackServices,
  getPackServicesFailure,
  getPackServicesSuccess,
  selectedAgency,
  editPackAgency,
  editPackAgencyFailure,
  editPackAgencySuccess,
} = agencySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoading = (state: RootState) => state.agency.isLoading;
export const selectError = (state: RootState) => state.agency.error;
export const selectGetAgency = (state: RootState) => state.agency.packResponse;
export const selectgetServices = (state: RootState) => state.agency.packService;
export const selectAgency = (state: RootState) => state.agency.agencySelected;

export default agencySlice.reducer;
