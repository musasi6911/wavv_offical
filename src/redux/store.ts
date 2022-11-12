import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "./musicPlayer/musicPlayerSlice";

const store = configureStore({
  reducer: musicPlayerReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
