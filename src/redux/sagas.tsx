import userSaga from "./features/user/userSaga"
import { all } from 'redux-saga/effects';
import authSaga from "./features/auth/authSaga"
import agencySaga from "./features/agency/agencySaga"
export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    agencySaga()
  ]);
}
