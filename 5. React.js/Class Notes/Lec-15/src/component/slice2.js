import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "slice2",
  initialState: { count: 0 },
  reducers: {
    addItems: (state) => {
      state.count++;
    },
    removeItems: (state) => {
      state.count--;
    },
  },
});

export const { addItems, removeItems } = foodSlice.actions;

export default foodSlice.reducer;
