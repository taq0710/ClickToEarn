import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";
import {
  AgencyResponse,
  IAgency,
  IServices,
  IServicesResponse,
} from "./interfaces";
import {
  createPackAgency,
  createPackAgencyFailure,
  createPackAgencySuccess,
  createPackServices,
  createPackServicesFailure,
  createPackServicesSuccess,
  getPackAgency,
  getPackAgencyFailure,
  getPackAgencySuccess,
  getPackServices,
  getPackServicesFailure,
  getPackServicesSuccess,
  editPackAgency,
  editPackAgencyFailure,
  editPackAgencySuccess,
} from "./agencySlice";

function* handleCreateAgency() {
  yield takeEvery(
    createPackAgency.type,
    function* (action: PayloadAction<IAgency>) {
      try {
        const response: any = yield call(
          factories.requestCreatePackAgency,
          action.payload
        );
        yield put(createPackAgencySuccess(response.data));
        // debugger
      } catch (error: any) {
        yield put(createPackAgencyFailure(error.message));
      }
    }
  );
}
function* handleGetAgency() {
  yield takeEvery(
    getPackAgency.type,
    function* (action: PayloadAction<AgencyResponse>) {
      try {
        const response: any = yield call(
          factories.getAgencyPack,
          action.payload
        );
        yield put(getPackAgencySuccess(response.data));
        // debugger;
      } catch (error: any) {
        yield put(getPackAgencyFailure(error.message));
      }
    }
  );
}
function* handleCreateService() {
  yield takeEvery(
    createPackServices.type,
    function* (action: PayloadAction<IServices>) {
      try {
        const response: any = yield call(
          factories.requestCreateService,
          action.payload
        );
        yield put(createPackServicesSuccess(response.data));
        // debugger
      } catch (error: any) {
        yield put(createPackServicesFailure(error.message));
      }
    }
  );
}
function* handleGetService() {
  yield takeEvery(
    getPackServices.type,
    function* (action: PayloadAction<IServicesResponse>) {
      try {
        const response: any = yield call(factories.getService, action.payload);
        yield put(getPackServicesSuccess(response.data));
      } catch (error: any) {
        yield put(getPackServicesFailure(error.message));
      }
    }
  );
}
function* handleEditAgency() {
  yield takeEvery(
    editPackAgency.type,
    function* (action: PayloadAction<AgencyResponse>) {
      try {
        const response: any = yield call(factories.editPost, action.payload);
        yield put(editPackAgencySuccess(response.data));
        // debugger
      } catch (error: any) {
        yield put(editPackAgencyFailure(error.message));
      }
    }
  );
}
export default function* rootSaga() {
  yield all([
    fork(handleCreateAgency),
    fork(handleGetAgency),
    fork(handleCreateService),
    fork(handleGetService),
    fork(handleEditAgency),
  ]);
}
