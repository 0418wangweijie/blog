import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
export const { increment } = slice.actions;

export const selectCount = (state) => {
  return state.counter.value;
};

export default slice.reducer;
