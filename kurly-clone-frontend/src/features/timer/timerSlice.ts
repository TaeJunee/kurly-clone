import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: 'timer',
  initialState:
  {
    timeout: true,
  },
  reducers: 
  {
    timeout: (state) => {
      state.timeout = true;
    },
    startCount: (state) => {
      state.timeout = false;
    },
  }
})

export const { timeout, startCount } = timerSlice.actions
export const isTimeover = (state: any) => state.timer.timeout
export default timerSlice.reducer