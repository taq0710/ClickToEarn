import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getUser, getUserFailure, getUserSuccess } from './userSlice';
import userFactories from './factories';
import { IUserDetail } from './interface';
// import userFactories from '../services/user';

function* handleGetUser() {
  yield takeEvery(
    getUser.type,
    function* (action: PayloadAction<IUserDetail>) {
      try {
        const response: any = yield call(
          userFactories.getUser,
          action.payload
        );
        yield put(getUserSuccess(response.data));
        // debugger
      } catch (error: any) {
        yield put(getUserFailure(error.message));
      }
    }
  );
}

export default function* rootSaga() {
  yield all([fork(handleGetUser)]);
}
