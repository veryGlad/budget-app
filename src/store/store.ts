import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userInfoSlice from './userInfoSlice';
import monthlyAnalyticsSlice from './monthlyAnalyticsSlice';
import expensesSlice from './expensesSlice';
import transactionsSlice from './transactionsSlice';

const rootReducer = combineReducers({
  userInfoSlice,
  monthlyAnalyticsSlice,
  expensesSlice,
  transactionsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
