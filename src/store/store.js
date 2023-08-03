import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookSlice from "./bookSlice";

const rootReducer = combineReducers({
  book: bookSlice,
});
const persistConfig = {
  key: "compare",
  whitelist: ["compareBooks"], // make sure it does not clash with server keys
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
  });

const persistedStore = persistStore(makeStore);

export const wrapper = createWrapper(makeStore);
