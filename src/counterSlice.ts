import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBySaga: (state, action) => {
      // This will be handled by Redux-Saga
      console.log(action, state)
    },
  },
});

export const { increment, decrement, incrementBySaga } = counterSlice.actions;
export default counterSlice.reducer;
