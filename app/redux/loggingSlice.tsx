"use client"

import { createSlice } from "@reduxjs/toolkit";
const loggingSlice = createSlice({
  name: "logging",
  initialState: { data: null },
  reducers: {
    apiResponse: (state, action) => {
      state.data = action.payload;
    },
    logOut : (state)=>{
      state.data = null
    }
  },
});

export const { apiResponse, logOut } = loggingSlice.actions;

export default loggingSlice.reducer;
