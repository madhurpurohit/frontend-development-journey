import { createSlice } from "@reduxjs/toolkit";

const reactSlice = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count += 1;
    },
    Decrement: (state) => {
      state.count -= 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
  },
});

console.log(reactSlice.actions);

export const { Increment, Decrement, Reset } = reactSlice.actions;

export default reactSlice.reducer;
