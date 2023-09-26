"use client"
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import userReducer from "./features/user/userSlice"
import authReducer from "./features/auth/authSlice"
import agencyReducer from "./features/agency/agencySlice"
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  agency: agencyReducer,
});

const masterReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    if (action.type === "profile/reset") state = undefined;
    return rootReducer(state, action);
  }
};

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: masterReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



