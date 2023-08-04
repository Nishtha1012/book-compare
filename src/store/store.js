import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookSlice from "./bookSlice";

const rootReducer = combineReducers({
  book: bookSlice, // bookSlice is a custom reducer for managing book-related state
});

// Configuration for data persistence with redux-persist
const persistConfig = {
  key: "compare", // Key used for persisting the data in local storage
  storage,
};

// Create a persisted reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create a function to generate the Redux store with persisted state
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer, // Use the persisted reducer as the root reducer
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore specific actions for serialization
        },
      }),
  });

// Create the Redux store instance using the makeStore function
const store = makeStore();

// Create a persisted version of the store
const persistedStore = persistStore(store);

// Export both the regular store and the persisted store
export { persistedStore, store };
