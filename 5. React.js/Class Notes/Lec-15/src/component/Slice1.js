import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const reactSlice = createSlice({
  name: "slice1",

  // Both below method are valid & works fine.
  initialState,
  // initialState: { count: 0 },

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
    CustomIncrease: (state, action) => {
      state.count += action.payload;
    },
  },
});

// console.log(reactSlice.actions);

export const { Increment, Decrement, Reset, CustomIncrease } =
  reactSlice.actions;

export default reactSlice.reducer;

/* How to update object in old time when Immer is not present there?
    Increment: (state) => {
          return {...state, count:state.count+1};
      }
*/
