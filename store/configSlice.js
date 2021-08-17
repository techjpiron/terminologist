import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    showTransac: false
  },
  reducers: {
    toogleShowTransac: (state) => {
      state.showTransac = !state.showTransac;
    }
  }
});

export const { toogleShowTransac } = configSlice.actions;

export default configSlice.reducer;
