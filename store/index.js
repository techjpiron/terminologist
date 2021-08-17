import { configureStore } from "@reduxjs/toolkit";
import {
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import localforage from "localforage";
import configReducer from "./configSlice";
import termBaseReducer from "./termBaseSlice";

export default configureStore({
  reducer: persistCombineReducers(
    {
      key: "root",
      storage: localforage,
      debug: true
    },
    {
      termBase: termBaseReducer,
      config: configReducer
    }
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});
