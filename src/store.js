import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './slices/AccountSlice';
import bonusReducer from './slices/bonusSlice';
import rewardReducer from './reducers/reward';
import { adminApi } from './api/adminSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
