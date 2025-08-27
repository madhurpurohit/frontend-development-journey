import { createSlice } from "@reduxjs/toolkit";

export const cartSLice = createSlice({
  name: "cartSlice",
  initialState: {
    item: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push({ ...action.payload, quantity: 1 });
      state.count++;
    },
    incrementItem: (state, action) => {
      const element = state.item.find(
        (curElem) => curElem.id === action.payload.id,
      );
      element.quantity++;
      state.count++;
    },
    decrementItem: (state, action) => {
      const element = state.item.find(
        (curElem) => curElem.id === action.payload.id,
      );
      if (element.quantity > 1) {
        element.quantity--;
      } else {
        state.item = state.item.filter(
          (curElem) => curElem.id !== action.payload.id,
        );
      }
      state.count--;
    },
  },
});

export const { addItem, incrementItem, decrementItem } = cartSLice.actions;
export default cartSLice.reducer;
