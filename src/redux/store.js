import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./newsApi";
import { investmentsApi } from "./investmentsApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [investmentsApi.reducerPath]: investmentsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(newsApi.middleware)
      .concat(investmentsApi.middleware),
});
