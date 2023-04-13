import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 10,
};

const incrementByAmount = createAction('account/incrementByAmount');

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1; //immer library will be used here.
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      action.payload>=10 && state.points++;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
