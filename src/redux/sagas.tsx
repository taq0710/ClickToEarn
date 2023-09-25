import userSaga from "./features/user/userSaga"
import { all } from 'redux-saga/effects';
import authSaga from "./features/auth/authSaga"
export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
  ]);
}
