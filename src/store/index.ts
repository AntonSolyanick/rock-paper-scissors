import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: { game: gameSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
