import { configureStore } from "@reduxjs/toolkit";
import slice1Reducers from "./Slice1";

const stores = configureStore({
  reducer: {
    slice1: slice1Reducers,
  },
});

export default stores;
