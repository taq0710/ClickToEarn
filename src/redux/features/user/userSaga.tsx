import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getProfile, getProfileFailure, getProfileSuccess } from './userSlice';
import userFactories from './factories';
// import userFactories from '../services/user';

function* handleGetProfileById() {
  yield takeEvery(getProfile.type, function* (payload: PayloadAction<string>) {
    try {
      const response: any = yield call(() => userFactories.getUser());
      yield put({
        type: getProfileSuccess.type,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: getProfileFailure.type,
        payload: error,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(handleGetProfileById)]);
}
