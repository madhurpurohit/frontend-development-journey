import { configureStore } from "@reduxjs/toolkit";
import SliceReducers from "./slice2";

const foodStore = configureStore({
  reducer: {
    slice2: SliceReducers,
  },
});

export default foodStore;
