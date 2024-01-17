import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

export const store = configureStore({
  reducer: {
    auth: rootReducer,
  },
});
