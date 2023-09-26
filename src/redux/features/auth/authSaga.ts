import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";
import {
  loginBySocial,
  loginBySocialFailure,
  loginBySocialSuccess,
  loginHome,
  loginHomeFailure,
  loginHomeSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from "./authSlice";
import { ILogin, ILoginSocial, ISignUp } from "@/interface";
function* handleLogin() {
  yield takeEvery(loginHome.type, function* (payload: PayloadAction<ILogin>) {
    try {
      const response: any = yield call(() =>
        factories.requestLogin(payload.payload)
      );
      console.log(response);
      if (response.data.message === "Success") {
        localStorage.setItem(
          "accesstoken",
          response.data.data.token.accessToken
        );
        localStorage.setItem(
          "refreshtoken",
          response.data.data.token.refreshToken
        );
        console.log(response.data.data.token.refreshToken);

        yield put({
          type: loginHomeSuccess.type,
          payload: response.data.data,
        });
      } else {
        yield put({
          type: loginHomeFailure.type,
          payload: response.data.message,
        });
      }
    } catch (error) {
      yield put({
        type: loginHomeFailure.type,
      });
    }
  });
}
function* handleLoginBySocial() {
  yield takeEvery(
    loginBySocial.type,
    function* (payload: PayloadAction<ILoginSocial>) {
      try {
        const response: any = yield call(() =>
          factories.requestLoginSocial(payload.payload)
        );
        if (response.data.success) {
          localStorage.setItem("token", response.data.data.token);
          yield put({
            type: loginBySocialSuccess.type,
            payload: response.data.data,
          });
        } else {
          yield put({
            type: loginBySocialFailure.type,
            payload: response.data.message,
          });
        }
      } catch (error) {
        yield put({
          type: loginBySocialFailure.type,
        });
      }
    }
  );
}
function* handleSignUp() {
  yield takeEvery(signUp.type, function* (payload: PayloadAction<ISignUp>) {
    try {
      const response: any = yield call(() =>
        factories.requestSignUp(payload.payload)
      );
      if (response.data.message === "Success") {
        yield put({
          type: signUpSuccess.type,
          payload: response.data,
        });
      } else {
        yield put({
          type: signUpFailure.type,
          payload: response.data.message,
        });
      }
    } catch (error) {
      yield put({
        type: signUpFailure.type,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(handleLogin), fork(handleLoginBySocial), fork(handleSignUp)]);
}
