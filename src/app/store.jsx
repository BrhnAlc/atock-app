import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../features/stockSlice";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    stock:stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
