import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "router_query",
  initialState: {
    title: "",
  },
  reducers: {
    increment: (state, val) => {
      state.title = val.payload;
    },
  },
});
export const { increment } = slice.actions;

export const selectRouterQuery = (state) => {
  return state.router_query.title;
};

export default slice.reducer;
