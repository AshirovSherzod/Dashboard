import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customerApi } from "./customerApi";
import { productApi } from "./productsApi";
import { adminApi } from "./adminSlice";
import { api } from "./api";
import authSlice from "./authSlice/authSlice";
import showheaderSlice from "./header/headerSlice";
import { paymentApi } from "./paymentSlice";
import { expenseApi } from "./expenceApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    showheader: showheaderSlice,
    [api.reducerPath]: api.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [expenseApi.reducerPath]: expenseApi.reducer
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(customerApi.middleware)
      .concat(adminApi.middleware)
      .concat(api.middleware)
      .concat(paymentApi.middleware)
      .concat(expenseApi.middleware)

});

setupListeners(store.dispatch);
