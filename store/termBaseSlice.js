import { createSlice } from "@reduxjs/toolkit";

const termBaseSlice = createSlice({
  name: "termBase",
  initialState: {},
  reducers: {
    update: (state, action) => action.payload
  }
});

export const { update } = termBaseSlice.actions;

export default termBaseSlice.reducer;
