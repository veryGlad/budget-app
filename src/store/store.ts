import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userInfo from './userInfoSlice';
import monthlyAnalytics from './monthlyAnalyticsSlice';
import expenses from './expensesSlice';
import transactions from './transactionsSlice';

const rootReducer = combineReducers({
  userInfo,
  monthlyAnalytics,
  expenses,
  transactions,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
