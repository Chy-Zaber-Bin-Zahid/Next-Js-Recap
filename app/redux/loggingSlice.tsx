"use client";

import { createSlice } from "@reduxjs/toolkit";
const loggingSlice = createSlice({
  name: "logging",
  initialState: { data: null },
  reducers: {
    apiResponse: (state, action) => {
      state.data = action.payload;
    },
    logOut: (state) => {
      state.data = null;
    },
    refreshUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { apiResponse, logOut, refreshUser } = loggingSlice.actions;

export default loggingSlice.reducer;
