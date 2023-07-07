'use client'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;