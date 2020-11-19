import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../middlewares/apis";
import appReducer from "../reducer";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: [...getDefaultMiddleware(), api],
});
