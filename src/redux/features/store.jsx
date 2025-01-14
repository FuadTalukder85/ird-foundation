"use client";
import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "../baseApi/baseApi";

const tasksPersistConfig = {
  key: "dua",
};
const persistedTasksReducer = tasksPersistConfig;
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    dua: persistedTasksReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({}).concat(baseApi.middleware),
});

// Export the store as well
export default store;
