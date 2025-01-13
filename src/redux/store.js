import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./newsApi";
import { investmentsApi } from "./investmentsApi";
import { reportsApi } from "./reportsApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [investmentsApi.reducerPath]: investmentsApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(newsApi.middleware)
      .concat(investmentsApi.middleware)
      .concat(reportsApi.middleware)
});
